import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io()

export default function App() {
    const [color, setColor] = useState('#FFFFFF')

    const submit: React.FormEventHandler = (e) => {
        e.preventDefault()
        socket.emit('color', color)
    }

    useEffect(() => {
        socket.on('color', (c) => setColor(c))
    })

    return (
        <div style={{backgroundColor: color, height: '100vh'}}>
            <fieldset>
                <legend>Set Color</legend>
                <form onSubmit={submit}>
                    <input type={'color'} onChange={(e) => setColor(e.target.value)} defaultValue={'#FFFFFF'}/>
                    <input type={'submit'} />
                    {color}
                </form>
            </fieldset>
        </div>
    )
}