import React from "react";
import './styles.css'
import api from "../../services/api";
import { useForm } from 'react-hook-form';

export default function Rate(props) {
    const { register, handleSubmit } = useForm();

    const {photo} = props;
    const token = localStorage.getItem('token');

    const onSubmit = async data => {
        data['photo']= photo;
        try{
            await api.post('ratings', data, {
                headers: {
                    Authorization: token
                }
            })
        }catch (e) {
            alert("Não foi possível efetuar a avaliação")
        }
    };

    return(
        <div className="rate-container">
            <form className="rate-form" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={1}
                        ref={register}
                    />
                    1
                </label>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={2}
                        ref={register}
                    />
                    2
                </label>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={3}
                        ref={register}
                    />
                    3
                </label>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={4}
                        ref={register}
                    />
                    4
                </label>
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={5}
                        ref={register}
                    />
                    5
                </label>
                <button type="submit">Avaliar</button>
            </form>
        </div>
    )
}