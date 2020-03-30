import React from "react";
import {Link} from "react-router-dom";
import {FiPower} from "react-icons/all";
import smile from "../../assets/sorriso.jpeg";
import './styles.css';
import Rate from "../Rate";

export default function Category() {
    return(
        <div className="category-container">
            <header>
                {/*Logo*/}
                <span>Bem vindo(a), username</span>

                <Link className="button" to="/photo">Cadastrar nova foto</Link>
                <button onClick={() => {}} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Fotos de Categoria</h1>

            <ul>
                <li>
                    <Link to="/detail">
                        <strong>Username</strong>
                    </Link>
                    <img src={smile} width={900} alt="category name"/>
                    <Rate/>
                </li>
                <li>
                    <Link to="/detail">
                        <strong>Username</strong>
                    </Link>
                    <img src={smile} width={900} alt="category name"/>
                    <Rate/>
                </li>
                <li>
                    <Link to="/detail">
                        <strong>Username</strong>
                    </Link>
                    <img src={smile} width={900} alt="category name"/>
                    <Rate/>
                </li>
            </ul>

        </div>
    )
}