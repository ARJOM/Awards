import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import './styles.css'
import api from "../../services/api";

import Header from "../Header";

export default function Profile() {
    const [photos, setPhotos] = useState([]);
    const [total, setTotal] = useState(0);

    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');

    const history = useHistory();

    useEffect(() => {
        api.get('profile/'+username, {
            headers: {
                Authorization: token
            }
        }).then(response => {
            setPhotos(response.data['photos']);
            setTotal(response.data['total-count'])
        })
    }, [username, token]);

    function navigateToDetail(photo) {
        history.push('/detail/'+photo)
    }

    return (
        <div className="profile-container">
            <Header/>

            <h1>Suas {total} fotos</h1>

            <div className="profile-photos">
                {photos.map(photo => (
                    <div className="photo" key={photo.id}>
                        <Link to="#" onClick={() => navigateToDetail(photo.id)}>
                            <img src={photo.photo}  width={337} alt="Foto"/>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}