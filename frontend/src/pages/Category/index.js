import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import './styles.css';
import Rate from "../../components/Rate";
import Header from "../../components/Header";
import api from "../../services/api";

export default function Category() {
    const [photos, setPhotos] = useState([]);
    const [total, setTotal] = useState(0);
    const [category, setCategory] = useState("");

    const { id } = useParams();

    const history = useHistory();

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get('photos/'+id, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setPhotos(response.data['photos']);
            setTotal(response.data['total-count']);
            setCategory(response.data['category']);
        }).catch(error => {
            if (error.response.status===401){
                alert("Sua sessão expirou. Faça login novamente.");
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                history.push('/')
            }
        });
    }, [token]);

    return(
        <div className="category-container">
            <Header/>

            <h1>Fotos de {category} - {total}</h1>

            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link to={"/detail/"+photo.id}>
                            <strong>{photo.username}</strong>
                        </Link>
                        <img src={photo.photo} width={900} alt={"Foto de "+photo.username}/>
                        <Rate photo={photo.id}/>
                    </li>
                ))}
            </ul>

        </div>
    )
}