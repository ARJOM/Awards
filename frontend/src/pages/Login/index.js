import React from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import {isAuthenticated} from "../../utils/auth";
import './styles.css'
import {useForm} from "react-hook-form";
import api from "../../services/api";

export default function Login() {

    const { register, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = async data => {
        try {
            const response = await api.post('session', data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', data['username']);
            alert("Bem vindo(a)");
            history.push('/home');
        } catch (e) {
            alert("Nome de usuário ou senha incorretos")
        }
    };

    if (isAuthenticated()){
        return(
            <Redirect to="/profile" />
        )
    }
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