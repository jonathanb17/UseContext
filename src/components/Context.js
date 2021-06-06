import React, { useContext } from 'react'

//importo
import { ThemeContext } from '../App';

const Context = () => {

    // esta variable tiene cosas..
    const context = useContext(ThemeContext);
    console.log(context);
    return (
        <div>
            <button
                style={{
                    background: context.background,
                    color: context.color
                }}>click me</button>
        </div>
    )
}

export default Context
