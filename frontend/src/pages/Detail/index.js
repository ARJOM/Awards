import React, {useState, useEffect} from "react";
import './styles.css'
import {useHistory, useParams} from 'react-router-dom'
import {FiTrash2} from "react-icons/all";
import Header from "../Header";
import api from "../../services/api";

export default function Detail() {
    const [photo, setPhoto] = useState({});
    const { id } = useParams();

    const history = useHistory();

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get('photos/detail/'+id, {
            headers: {
                Authorization: token
            }
        }).then(response => setPhoto(response.data)
        ).catch(error => {
            if (error.response.status===401){
                alert("Sua sessão expirou. Faça login novamente.");
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                history.push('/')
            }
        });
    }, []);

    return(
        <div className="detail-container">
            <Header/>
            <h1>{photo.username}</h1>

            <div className="detail-photos">
                <div className="photo">
                    <img src={photo.photo}  width={800} alt="Foto"/>
                </div>
                <div className="info">
                    <div>
                        <p>Nota Geral</p>
                        <div className="rate">
                            {String(photo.grade)}
                        </div>
                    </div>
                    <div>
                        <p>Total de Votos</p>
                        <div className="rate">
                            {photo.total}
                        </div>
                    </div>

                    <div>
                        <p>Nota mais recebida</p>
                        <div className="rate">
                            {String(photo.evaluation)}
                        </div>
                    </div>
                    <button type="button" onClick={() => {}}>
                        <FiTrash2 size={20} color="a8a8b3"/>
                    </button>
                </div>
            </div>
        </div>
    )
}