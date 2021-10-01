import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'


const Home = () => {
    const [username, setUsername] = useState('')
    const history = useHistory()
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePress = (e) => {
        if (e.key === 'Enter' && username.trim()) {
            history.push(`/${username}`) //внутри сайта перекидывает аналог Link
        }
    }


    return (
        <div>
            <input type="text" onChange={handleChange} onKeyPress={handlePress} placeholder="search"/>
        </div>
    );
};

export default Home;