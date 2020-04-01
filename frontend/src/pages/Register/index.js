import React from "react";
import {Link, Redirect, useHistory} from "react-router-dom";
import { useForm } from 'react-hook-form';

import api from "../../services/api";
import './styles.css'
import {isAuthenticated} from "../../utils/auth";

export default function Register() {
    const { register, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = async data => {
        try {
            await api.post('users', data);
            alert("Cadastro realizado com sucesso");
            history.push('/');
        } catch (e) {
            alert("Nome de usuário ou email já cadastrado")
        }
    };


    if (isAuthenticated()){
        return(
            <Redirect to="/profile" />
        )
    }
    return(
        <div className="register-container">
            <div className="content">
                <section>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e começe a compartilhar e avaliar as mais diversas fotos.</p>

                    <Link className="back-link" to="/">
                        Voltar para o Login
                    </Link>
                </section>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Nome de usuario"
                        name="username"
                        ref={register({required: true})}
                    />
                    <input
                        placeholder="E-mail"
                        name="email"
                        type="email"
                        ref={register({required: true})}
                    />
                    <input
                        placeholder="Senha"
                        name="password"
                        type="password"
                        ref={register({required: true})}
                    />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={1}
                            defaultChecked={true}
                            ref={register}
                        />
                        Masculino
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={2}
                            ref={register}
                        />
                        Feminino
                    </label>

                    <button className="button">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}