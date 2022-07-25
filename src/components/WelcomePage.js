import React from "react"
import logo from "../imgs/logo.png"

export default function WelcomePage({setPage}) {

    return (
        <div className="welcomePage" >
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={() => setPage("tela2")}>Iniciar Recall!</button>
        </div>
    )

    }