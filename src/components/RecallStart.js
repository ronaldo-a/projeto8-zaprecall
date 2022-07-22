import Decks from "./Decks"

export default function RecallStart() {

    return (
    <div className="recallStart">
        <Header />
        <Decks />
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

function Footer() {
    return (
    <div className="footer">
        <p>1/4 concluídos</p>
    </div>
    )
}