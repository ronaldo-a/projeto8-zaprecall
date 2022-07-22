import React from "react"

export default function Questions (props) {

    //Mistura o baralho de cartas
    function shuffleDeck(deck) {
            for(var i =deck.length-1 ; i>0 ;i--){
                var j = Math.floor( Math.random() * (i + 1) );
                [deck[i],deck[j]]=[deck[j],deck[i]];
            }
    }

    shuffleDeck(props.deck)

    //Componente que define uma carta
    function Question (props) {
        const [card, setCard] = React.useState("initialFace")
        const [result, setResult] = React.useState("")
        const [ion, setIon] = React.useState("play-outline")

        

        if (card === "initialFace") {
            return (
                <button className={result}>
                    <p>Pergunta {props.index + 1}</p> 
                    <ion-icon name={ion} onClick={() => (result === "" ? setCard("questionFace") : setCard("initialFace"))}></ion-icon>
                </button>
            )
        } else if (card === "questionFace") {
            return (
                <button className="questionFace">
                    <p>{props.question}</p>
                    <img src="./imgs/setinha.png" alt="" onClick={() => setCard("answerFace")}/>
                </button>
            )
        } else {
            return (
                <button className="answerFace">
                    <p>{props.answer}</p>
                    <div className="resultButtons">
                    <button className="not" onClick={() => afterResult("resultRed", "close-circle")}>Não lembrei</button>
                    <button className="almost" onClick={() => afterResult("resultYellow", "help-circle")}>Quase não lembrei</button>
                    <button className="zap" onClick={() => afterResult("resultGreen", "checkmark-circle")}>Zap!</button>
                    </div>
                </button>
            )
        }

        function afterResult(result, ion) {
            setCard("initialFace")
            setResult(result)
            setIon(ion)
        }
    }    

    //Para pegar apenas 4 das 8 cartas do baralho
    const questionsShown = []
    for (let i=0; i<4; i++) {
        questionsShown.push(props.deck[i])
    } 

    return (
        <div className="questions">
            {questionsShown.map((info, index) => <Question question={info.question} answer={info.answer} index={index} key={index} />)}
        </div>
    )

}