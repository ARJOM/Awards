import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

export default function Register() {
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

                <form>
                    <input placeholder="Nome de usuario"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Senha"/>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={1}
                            checked={true}
                        />
                        Masculino
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value={2}
                        />
                        Feminino
                    </label>

                    <button className="button">Cadastrar</button>
                </form>

            </div>
        </div>
    )
}