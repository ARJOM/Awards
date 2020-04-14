import React, {useEffect, useState} from "react";
import Header from "../../components/Header";
import {Link} from "react-router-dom";
import Rate from "../../components/Rate";
import api from "../../services/api";

export default function Rated() {
    const [photos, setPhotos] = useState([]);
    const [total, setTotal] = useState(0);

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get('rated', {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setPhotos(response.data['photos']);
            setTotal(response.data['total-count']);
            console.log(response.data)
        }).catch(error => {
            if (error.response){
                if (error.response.status===401){
                    alert("Sua sessão expirou. Faça login novamente.");
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                }
            }
        });
    }, [token]);

    return(
        <div className="category-container">
            <Header/>

            <h1>Fotos avaliadas - {total}</h1>

            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link to={"/detail/"+photo.id}>
                            <strong>{photo.username}</strong>
                        </Link>
                        <img src={photo.photo} width={900} alt={"Foto de "+photo.username}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}