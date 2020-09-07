import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: 'what is react ?',
        content: 'React is a front end js library'
    },
    {
        title: 'what is react 2 ?',
        content: 'React is a front end js library2'
    },
    {
        title: 'what is react 3 ?',
        content: 'React is a front end js library 3 '
    },
]


const options = [
    {
        label: 'the color Red',
        value: 'red'
    },
    {
        label: 'the color Green',
        value: 'Green'
    },
    {
        label: 'the color blue',
        value: 'blue'
    },
]
export default () => {
    const [selected, setSelected] = useState(options[0])
    const [showDropdown,setShowDropdown]=useState(true)

    return (
    <div>
        <button onClick={()=>setShowDropdown(!showDropdown)}>
            Toggle dropdown
        </button>
        <div>
            {showDropdown?
            <Dropdown
                selected={selected}
                setSelected={setSelected}
                options={options}
            />
            :null}
        </div>
    </div>)
}