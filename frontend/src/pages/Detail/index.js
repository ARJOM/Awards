import React from "react";
import './styles.css'
import {Link} from "react-router-dom";
import {FiPower, FiTrash2} from "react-icons/all";
import smile from "../../assets/sorriso.jpeg";

export default function Detail() {
    return(
        <div className="detail-container">
            <header>
                {/*Logo*/}
                <span>Bem vindo(a), username</span>

                <Link className="button" to="/photo">Cadastrar nova foto</Link>
                <button onClick={() => {}} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Username</h1>

            <div className="detail-photos">
                <div className="photo">
                    <img src={smile}  width={800} alt="Foto"/>
                </div>
                <div className="info">
                    <div>
                        <p>Nota Geral</p>
                        <div className="rate">
                            4
                        </div>
                    </div>
                    <div>
                        <p>Total de Votos</p>
                        <div className="rate">
                            45
                        </div>
                    </div>

                    <div>
                        <p>Nota mais recebida</p>
                        <div className="rate">
                            4
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