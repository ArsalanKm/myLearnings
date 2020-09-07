import React, {useState} from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Farsi',
        value: 'fa'
    },
    {
        label: 'Dutch',
        value: 'de'
    },
]
const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const label = "Select the language"
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form segment">
                <div className="field">
                    <label>Enter the text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text"/>
                </div>
            </div>
            <Dropdown
                selected={language}
                setSelected={setLanguage}
                options={options}
                label={label}
            />
            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}
export default Translate