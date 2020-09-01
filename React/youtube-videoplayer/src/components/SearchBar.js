import React from "react";

class SearchBar extends React.Component {
    state = {term: ''}
    InputOnChangeHandler = (e) => {
        this.setState({term: e.target.value})

    }

    FormSubmitHandler = (e) => {
        e.preventDefault()
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.FormSubmitHandler}
                      className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input value={this.state.term}
                               onChange={this.InputOnChangeHandler} type="text"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar