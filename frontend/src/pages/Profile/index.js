import React from "react";
import { Link } from "react-router-dom";
import './styles.css'

import smile from '../../assets/sorriso.jpeg'
import Header from "../Header";

export default function Profile() {
    return (
        <div className="profile-container">
            <Header/>

            <h1>Suas fotos</h1>

            <div className="profile-photos">
                <div className="photo">
                    <Link to="/detail">
                        <img src={smile}  width={337} alt="Foto"/>
                    </Link>
                </div>
                <div className="photo">
                    <Link to="/detail">
                        <img src={smile}  width={337} alt="Foto"/>
                    </Link>
                </div>
                <div className="photo">
                    <Link to="/detail">
                        <img src={smile}  width={337} alt="Foto"/>
                    </Link>
                </div>
                <div className="photo">
                    <Link to="/detail">
                        <img src={smile}  width={337} alt="Foto"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}