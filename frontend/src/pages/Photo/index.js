import React from "react";
import './styles.css';
import {Link} from "react-router-dom";

export default function Photo() {
    return(
        <div className="photo-container">
            <section className="form">
                <form>
                    <h1>Envie sua foto</h1>
                    <select>
                        <option>A</option>
                        <option>A</option>
                        <option>A</option>
                    </select>

                    <label htmlFor="newPhoto">
                        <div className="new-file">
                            Selecione sua foto
                        </div>
                    </label>
                    <input type="file"
                           id="newPhoto"
                    />

                    <button className="button">Cadastrar</button>

                    <Link className="back-link" to="/profile">
                        Voltar para perfil
                    </Link>
                </form>
            </section>
        </div>
    )
}