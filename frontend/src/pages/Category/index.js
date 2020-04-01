import React from "react";
import {Link} from "react-router-dom";
import smile from "../../assets/sorriso.jpeg";
import './styles.css';
import Rate from "../Rate";
import Header from "../Header";

export default function Category() {
    return(
        <div className="category-container">
            <Header/>

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