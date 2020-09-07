import React, {useState, useEffect, useRef} from "react";


const Dropdown = ({options, selected, setSelected,label}) => {
    const [open, setOpen] = useState(false)

    const ref = useRef()
    useEffect(() => {
        const onBodyclick = (event) => {
            if (ref?.current?.contains(event.target))
                return
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyclick)

        return ()=>{
            document.body.removeEventListener('click',onBodyclick)

        }

    }, [])
    const renderedOptions = options.map(option => {
        if (option.value === selected.value) return null
        return (
            <div
                onClick={() => setSelected(option)}
                className='item' key={option.value}>
                {option.label}
            </div>
        )
    })
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    {label}
                </label>
                <div onClick={() => setOpen(!open)}
                     className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dropdown