import React from "react";
import UserCreate from './UserCreate'
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
    state = {language: 'english', color: 'primary'}
    onLanguageChange = language => {
        this.setState({language})
    }
    onColorChange = color => {
        this.setState({color})
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    selectLanguage
                    <i style={{cursor: "pointer"}} onClick={() => this.onLanguageChange('english')}
                       className="flag us"></i>
                    <i style={{cursor: "pointer"}} onClick={() => this.onLanguageChange('dutch')}
                       className="flag de"></i>
                    <i style={{cursor: "pointer"}} onClick={() => this.onColorChange('red')}
                       style={{color: 'red'}}>red</i>
                    <i style={{cursor: "pointer"}} onClick={() => this.onColorChange('primary')}
                       style={{color: 'blue'}}>blue</i>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ColorContext.Provider value={this.state.color}>
                        <UserCreate/>
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App