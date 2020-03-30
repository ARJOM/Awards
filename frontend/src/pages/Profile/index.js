import React from "react";
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/all";
import './styles.css'

import smile from '../../assets/sorriso.jpeg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                {/*Logo*/}
                <span>Bem vindo(a), username</span>

                <Link className="button" to="/incidents/new">Cadastrar nova foto</Link>
                <button onClick={() => {}} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Suas fotos</h1>

            <div className="profile-photos">
                <div className="photo">
                    <Link to="/photo/id">
                        <img src={smile}  width={337} alt="Foto"/>
                    </Link>
                </div>
                <div className="photo">
                    <img src={smile}  width={337} alt="Foto"/>
                </div>
                <div className="photo">
                    <img src={smile}  width={337} alt="Foto"/>
                </div>
                <div className="photo">
                    <img src={smile}  width={337} alt="Foto"/>
                </div>
            </div>
        </div>
    )
}