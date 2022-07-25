import React from "react"
import Header from "./Header"
import Decks from "./Decks"
import Footer from "./Footer"


export default function RecallStart() {

    const [counter, setCounter] = React.useState(0) 
    const [sequence, setSequence] = React.useState([])
    
    return (
        <div className="recallStart">
            <Header />
            <Decks 
            setCounter={setCounter} 
            counter={counter} 
            sequence={sequence} 
            setSequence={setSequence}
            />
            <Footer counter={counter} sequence={sequence}/>
        </div>
        )
}