import React, {useState, useEffect} from "react";
import './styles.css';
import {Link, useHistory} from "react-router-dom";
import api from "../../services/api";

export default function Photo() {
    const [types, setTypes] = useState([]);
    const [type, setType] = useState(1);
    const [photo, setPhoto] = useState('');

    const token = localStorage.getItem('token');

    const history = useHistory();

    useEffect(() => {
        api.get('types',{
            headers: {
                Authorization: token
            }
        })
            .then(response => setTypes(response.data)
        )
    }, [token]);


    function handlePhotoChange(e) {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPhoto(reader.result);
        };
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            type,
            photo
        };

        console.log(data);

        try {
            await api.post('photos', data, {
                headers: {
                    Authorization: token
                }
            });
            alert("Foto publicada");
            history.push('/profile');
        } catch (e) {
            alert("Erro ao publicar")
        }
    }

    return(
        <div className="photo-container">
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <h1>Envie sua foto</h1>
                    <select
                        name="type"
                        onChange={e => {
                            console.log(e.target.value);
                            setType(e.target.value)
                        }}
                    >
                        {types.map(type=>(
                            <option
                                key={type.id}
                                value={type.id}
                            >
                                {type.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="newPhoto">
                        <div className="new-file">
                            Selecione sua foto
                        </div>
                    </label>
                    <input type="file"
                           id="newPhoto"
                           name="photo"
                           onChange={e => handlePhotoChange(e)}
                    />

                    <button className="button">Publicar</button>

                    <Link className="back-link" to="/profile">
                        Voltar para perfil
                    </Link>
                </form>
            </section>
        </div>
    )
}