import WelcomePage from "./components/WelcomePage"
//import RecallStart from "./components/RecallStart"
import React from "react"
import Decks from "./components/Decks"
import Footer from "./components/Footer"
import Header from "./components/Header"



export default function App() {

    const [page, setPage] = React.useState("tela1") 
    const [cardsAnswered, setCardsAnswered] = React.useState(0) 
    const [sequence, setSequence] = React.useState([])

    if (page === "tela1") {
        return (
        <WelcomePage setPage={setPage} page={page}/>
        )
    } else if (page === "tela2") {
        return (
        <div className="recallStart">
            <Header />
            <Decks 
            setCardsAnswered={setCardsAnswered} 
            cardsAnswered={cardsAnswered} 
            sequence={sequence} 
            setSequence={setSequence}
            />
            <Footer result={cardsAnswered} sequence={sequence}/>
        </div>
        )
    }
}