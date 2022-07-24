export default function Footer(props) {

    if (props.result < 4){
    return (
    <div className="footer">
        <p>{props.result}/4 concluídos</p>
        <div className="sequence">
            {props.sequence}
        </div>
    </div>
    )
    } else if ((props.sequence.filter((sequence) => sequence.props.className === "resultRed")).length === 0) {
        return (
            <div className="footerFinal">
                <div className="firstLine"> <img src="./imgs/party.png"/> <p>Parabéns!</p> </div>
                <p>Você não esqueceu nenhum flashcard!</p>
                <p>{props.result}/4 concluídos</p>
                <div className="sequence">
                    {props.sequence}
                </div>
            </div>
            )
    } else {
        return (
            <div className="footerFinal">
                <div className="firstLine"> <img src="./imgs/sad.png"/> <p>Putz...</p> </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
                <p>{props.result}/4 concluídos</p>
                <div className="sequence">
                    {props.sequence}
                </div>
            </div>
            )
    }
}