import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

export default function Register() {
    return(
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Username"/>
                    <input type="password" placeholder="Senha"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
        </div>

    )
}