import React from "react"
import Decks from "./Decks"
import Footer from "./Footer"

export default function RecallStart() {

    const [cardsAnswered, setCardsAnswered] = React.useState(4)

    return (
    <div className="recallStart">
        <Header />
        <Decks cardsQuestoes={cardsQuestoes} />
        <Footer result={cardsAnswered} />
    </div>
)

    function cardsQuestoes () {
       setCardsAnswered(cardsAnswered + 1)
    }
}

function Header() {
    return (
    <div className="header">
        <img src="./imgs/logo.png" alt="" />
        <h1>ZapRecall</h1>
    </div>
    )
}


