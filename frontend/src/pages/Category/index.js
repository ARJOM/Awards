import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import './styles.css';
import Rate from "../Rate";
import Header from "../Header";
import api from "../../services/api";

export default function Category() {
    const [photos, setPhotos] = useState([]);
    const [total, setTotal] = useState(0);
    const [category, setCategory] = useState("");

    const { id } = useParams();

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
        })
    }, [token]);

    return(
        <div className="category-container">
            <Header/>

            <h1>Fotos de {category} - {total}</h1>

            <ul>
                {photos.map(photo => (
                    <li>
                        <Link to={"/detail/"+photo.id}>
                            <strong>{photo.username}</strong>
                        </Link>
                        <img src={photo.photo} width={900} alt={"Foto de "+photo.username}/>
                        <Rate/>
                    </li>
                ))}
            </ul>

        </div>
    )
}