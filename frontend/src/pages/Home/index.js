import React, {useEffect, useState} from "react";
import './styles.css'
import {Link, useHistory} from 'react-router-dom';
import Header from '../Header'
import api from "../../services/api";


export default function Home() {
    const [categorys, setCategorys] = useState([]);

    const history = useHistory();

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get('home', {
            headers: {
                Authorization: token
            }
        }).then(response => setCategorys(response.data)
        ).catch(error => {
            if (error.response.status===401){
                alert("Sua sessão expirou. Faça login novamente.");
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                history.push('/')
            }
        });
    }, [token]);

    return(
        <div className="home-container">
            <Header/>

            <h1>Categorias</h1>

            <ul>
                {categorys.map(category => (
                    <li key={category.id}>
                        <Link to={"category/"+category.id}>
                            <strong>{category.name}</strong>
                        </Link>
                        <img src={category.photo} width={500} alt={"foto mais bem avaliada de "+category.name}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}