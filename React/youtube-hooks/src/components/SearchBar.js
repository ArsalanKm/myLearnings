import React, {useState} from "react";

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('')

    const InputOnChangeHandler = (e) => {
        setTerm(e.target.value)

    }

    const FormSubmitHandler = (e) => {
        e.preventDefault()
        onFormSubmit(term)
    }
    return (
        <div className="search-bar ui segment">
            <form onSubmit={FormSubmitHandler}
                  className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input
                        value={term}
                        onChange={InputOnChangeHandler}
                        type="text"/>
                </div>
            </form>
        </div>
    )

}



export default SearchBar