import React from "react";
import {Link} from "react-router-dom";
import {FiPower} from "react-icons/all";
import smile from "../../assets/sorriso.jpeg";
import './styles.css';

export default function Category() {
    return(
        <div className="category-container">
            <header>
                {/*Logo*/}
                <span>Bem vindo(a), username</span>

                <Link className="button" to="/incidents/new">+</Link>
                <button onClick={() => {}} type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Fotos de Categoria</h1>

            <ul>
                <li>
                    <Link to="/categoria/id">
                        <strong>Username</strong>
                    </Link>
                    <img src={smile} width={1000} alt="category name"/>
                </li>
                <li>
                    <Link to="/categoria/id">
                        <strong>Username</strong>
                    </Link>
                    <img src={smile} width={1000} alt="category name"/>
                </li>
                <li>
                    <Link to="/categoria/id">
                        <strong>Username</strong>
                    </Link>
                    <img src={smile} width={1000} alt="category name"/>
                </li>
            </ul>

        </div>
    )
}