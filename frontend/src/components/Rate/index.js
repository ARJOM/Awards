import React from "react";
import './styles.css'

export default function Rate() {
    return(
        <div className="rate-container">
            <form className="rate-form">
                <label>
                    <input
                        type="radio"
                        name="rate"
                        value={1}
                    />
                    1
                </label>
                <label>
                    <input
                        type="radio"
                        name="rate"
                        value={2}
                    />
                    2
                </label>
                <label>
                    <input
                        type="radio"
                        name="rate"
                        value={3}
                    />
                    3
                </label>
                <label>
                    <input
                        type="radio"
                        name="rate"
                        value={4}
                    />
                    4
                </label>
                <label>
                    <input
                        type="radio"
                        name="rate"
                        value={5}
                    />
                    5
                </label>
                <button type="submit">Avaliar</button>
            </form>
        </div>
    )
}