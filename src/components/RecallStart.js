import react from "react"

export default function RecallStart() {

    return (
    <div className="recallStart">
        <Header />
        <Questions />
        <Footer />
    </div>
    )
}

function Header() {
    return (
    <div className="header">
        <img src="./imgs/logo.png" alt="" />
        <h1>ZapRecall</h1>
    </div>
    )
}

function Questions() {
    return (
        <div className="questions">
            <button>Pergunta 1 <ion-icon name="play-outline"></ion-icon></button>
            <button>Pergunta 2 <ion-icon name="play-outline"></ion-icon></button>
            <button>Pergunta 3 <ion-icon name="play-outline"></ion-icon></button>
            <button>Pergunta 4 <ion-icon name="play-outline"></ion-icon></button>
        </div>

        )
}

function Footer() {
    return (
    <div className="footer">
        <p>0/4 concluídos</p>
    </div>
    )
}