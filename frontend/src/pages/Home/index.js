import React from "react";
import './styles.css'
import { Link } from 'react-router-dom';
import {FiPower} from "react-icons/all";
import smile from "../../assets/sorriso.jpeg"


export default function Home() {
    return(
        <div className="home-container">
            <header>
                {/*Logo*/}
                <span>Bem vindo(a), username</span>

                <Link className="button" to="/photo">Cadastrar nova foto</Link>
                <button onClick={() => {}} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Categorias</h1>

            <ul>
                <li>
                    <Link to="/category">
                        <strong>Sorriso</strong>
                    </Link>
                    <img src={smile} width={500} alt="category name"/>
                </li>
                <li>
                    <Link to="/category">
                        <strong>Sorriso</strong>
                    </Link>
                    <img src={smile} width={500} alt="category name"/>
                </li>
                <li>
                    <Link to="/category">
                        <strong>Sorriso</strong>
                    </Link>
                    <img src={smile} width={500} alt="category name"/>
                </li>
            </ul>

        </div>
    )
}