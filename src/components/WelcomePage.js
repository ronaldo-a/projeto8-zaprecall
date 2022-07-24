import React from "react"

export default function WelcomePage({setPage}) {

    return (
        <div className="welcomePage" >
            <img src="./imgs/logo.png" alt="" />
            <h1>ZapRecall</h1>
            <button onClick={() => setPage("tela2")}>Iniciar Recall!</button>
        </div>
    )

    }