import React from "react"

export default function Questions (props) { 

    return (
        <div className="questions">{
            props.baralho.map((info, index) => <Question 
                question={info.question} 
                answer={info.answer} 
                index={index} 
                setCounter={props.setCounter} 
                counter={props.counter} 
                key={index}
                sequence={props.sequence}
                setSequence={props.setSequence} />)}
        </div>
    )
}

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
                <img src="./imgs/setinha.png" alt="setinha" onClick={() => setCard("answerFace")}/>
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
        setCard("initialFace") //Leva da face de resposta para a face inicial do card (com resultado)
        setResult(result) //Define a cor do ícone e fonte da face inicial do card de acordo com o resultado
        setIon(ion) //Define ion-icon da face inicial do card de acordo com resultado
        props.setCounter(props.counter + 1) //Altera contador de respostas do Footer
        props.setSequence([...props.sequence, <div className={result} key={props.sequence.length-1}><ion-icon name={ion}></ion-icon></div>]) //Adiciona ion-icon ao footer de acordo com resultado
    }

}   