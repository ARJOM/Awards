import React from "react";
import './styles.css'
import { Link } from 'react-router-dom';
import Header from '../Header'
import smile from "../../assets/sorriso.jpeg"


export default function Home() {
    return(
        <div className="home-container">
            <Header/>

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