import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "../../views/Layout";
import Spinner from "../Spinner";
import NotFound from "../NotFount";

const Repositories = () => {
    const [project, setProject] = useState([])
    const {username} = useParams() //useParams - фактическое значение из адресной строки  и напрвляет на адрес
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios(`https://api.github.com/users/${username}/repos`,) //делает запрос на полученрие списка по адресу username
                setProject(data)  //кладет в state
            } catch (e) {
                setNotFound(true)
            } finally {
                setIsLoading(false)
            }
        })()   //функция EF -   (async () => {...})()
    }, [username])

    if (isLoading) {
        return <Spinner />
    }
    if (notFound) {
        return <NotFound />
    }


    return (
        <Layout>
                <table className="table">
                    <thead className='table-success'>
                    <tr>
                        <th scope="col">N</th>
                        <th scope="col">Фамилия</th>
                        <th scope="col">Дата создания</th>
                        <th scope="col">Readme.md</th>
                    </tr>
                    </thead>
                    {
                        project.map((el, idx) =>
                            <tbody key={el.id}>
                            <tr>
                                <th scope="row" >{idx + 1}</th>
                                <td><Link to={`/${username}/${el.name}`}> {el.name} </Link></td>
                                    <td>{el.created_at.slice(0,10)}</td>
                                    <td><Link to={`/${username}/${el.name}`}>
                                        README.md</Link></td>
                            </tr>
                            </tbody>
                        )
                    }
                </table>

        </Layout>
    );
};

export default Repositories;
sudo git add .
    sudo git commit -m "First commit"
sudo git push -u origin master

