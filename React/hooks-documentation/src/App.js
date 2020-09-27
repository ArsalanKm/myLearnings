import React, {useState} from 'react';
import Input from "./Input";
function App() {
    const [hint, setHint] = useState('')
    const handleChange = (e) => {
        const data=require('./cities.json')
        const cities=[]
        if (e.target.value) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].startsWith(e.target.value))
                    cities.push(data[i])
            }
        }
        setHint(cities[0])
    }
    return (<div>

        <Input handleChange={handleChange} hint={hint}/>
    </div>)
}

export default App;
