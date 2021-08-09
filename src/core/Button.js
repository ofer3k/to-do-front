import React from 'react'
import './../styles/button.css'
export default function Button(props) {
    return (
        <button onClick={props.func} style={{backgroundColor:props.backgroungColor}} className={'button_style'}>
        <div >
        <span style={{color:props.color}} >{props.content}</span>
         </div>
            </button>

    )
}
