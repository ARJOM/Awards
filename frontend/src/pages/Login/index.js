import React from "react";
import {Link, useHistory} from "react-router-dom";
import './styles.css'
import {useForm} from "react-hook-form";
import api from "../../services/api";

export default function Login() {

    const { register, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = async data => {
        try {
            console.log(data);
            const response = await api.post('session', data);
            if (response.data.result){

                history.push('/home');
            }
        } catch (e) {
            alert("Nome de usuário ou senha incorretos")
        }
    };
    return(
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Faça seu login</h1>
                    <input
                        placeholder="Nome de usuário"
                        name="username"
                        ref={register({required: true})}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        name="password"
                        ref={register({required: true})}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>

    )
}