import React from "react"

export default function Questions (selectedQuestions) {

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

    const questions = selectedQuestions.deck

    return (
        <div className="questions">
            {questions.map((info, index) => <Question question={info.question} answer={info.answer} index={index} key={index} />)}
        </div>
    )

}