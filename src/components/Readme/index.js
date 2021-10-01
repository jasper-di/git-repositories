import React, {useEffect, useState} from 'react';
import Layout from "../../views/Layout";
import {useParams} from "react-router-dom";
import axios from "axios";
import Markdown from "markdown-to-jsx";
import GoBack from "../../views/GoBack";

const Readme = () => {
    const {username, project} = useParams()
    const [readme, setReadme] = useState('')

    useEffect(() => {
        axios(`https://api.github.com/repos/${username}/${project}/readme`, {
            headers: {Accept: 'application/vnd.github.VERSION.raw'} //заголовки запросов на сервер
        }).then(({data}) => setReadme(data))
    },[username, project])


    return (
        <Layout>
            <GoBack />
            {
                readme ?  <Markdown>
                    {readme}
                </Markdown> : <h1>Readme.md файла нет!</h1>
            }
        </Layout>
    );
};

export default Readme;