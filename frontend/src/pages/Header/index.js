import React from "react";
import './styles.css';
import {Link, useHistory} from "react-router-dom";
import {FiPower} from "react-icons/all";

export default function Header() {
    const history = useHistory();

    return(
        <header className="container">
            {/*Logo*/}
            <span>Bem vindo(a), username</span>

            <Link className="button" to="/photo">Cadastrar nova foto</Link>
            <button onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                history.push('/')
            }} type="button">
                <FiPower size={18} color="#E02041"/>
            </button>
        </header>
    )
}