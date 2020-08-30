// Import the react and reactDom libraries

import React from "react";
import ReactDom from 'react-dom'

// create a react component
const   getText=()=>{
    return "this test for function"
}
const App = () => {
    const buttonText = {text:"hello there"}
    return (
        <div>
            <label className="label" htmlFor="name">name</label>
            <input type="text" id="name"/>
            <button style={{
                backgroundColor: 'red',
                color: 'white'
            }}>{   buttonText.text }
            </button>
        </div>
    )
}

ReactDom.render(
    <App/>,
    document.querySelector("#root")
)