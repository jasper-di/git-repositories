import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Header = () => {
    const [user, setUser] = useState({})
    const {username} = useParams() //useParams - фактическое значение из адресной строки  и напрвляет на адрес

    useEffect(() => {
        axios(`https://api.github.com/users/${username}`)
            .then(({data}) => setUser(data))
    },[username])



    return (
        <header className='header bg-dark text-white d-flex justify-content-between aline-items-center'>
            <div className='d-flex '>
                <img className='username-img me-3' src={user.avatar_url} alt=""/>
                <h3 className='d-flex align-items-center justify-content-center'>{user.name}</h3>
            </div>
            <input type="text" className='form-control ' placeholder='Header input'/>
            <button>search</button>
        </header>
    );
};

export default Header;