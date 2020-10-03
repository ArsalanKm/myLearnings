import React from 'react';
import axios from 'axios'
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField: ''
        }
    }

    renderFilteredMonsters = () => {
        const {monsters, searchField} = this.state
        const filterMonsters = monsters
            .filter(monster => monster.name.toLowerCase()
                .includes(searchField.toLowerCase()))
        return filterMonsters
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => this.setState({monsters: data}))
    }

    handleChange = (e) => {
        this.setState(e.target.value)
    }

    render() {

        const filterMonsters = this.renderFilteredMonsters()
        return (
            <div className="App">
                <h1>Monsters Roldex</h1>
                <SearchBox placeHolder="search Monsters"
                           handleChange={this.handleChange}/>
                <CardList monsters={filterMonsters}>

                </CardList>

            </div>
        );
    }
}

export default App;
