import party from "../imgs/party.png"
import sad from "../imgs/sad.png"

export default function Footer(props) {

    //Footer para menos de 4 perguntas respondidas
    if (props.counter < 4){
    return (
    <div className="footer">
        <p>{props.counter}/4 concluídos</p>
        <div className="sequence">
            {props.sequence}
        </div>
    </div>
    ) //Footer para nenhum resposta "não lembrei"
    } else if ((props.sequence.filter((sequence) => sequence.props.className === "resultRed")).length === 0) {
        return (
            <div className="footerFinal">
                <div className="firstLine"> <img src={party} alt="party"/> <p>Parabéns!</p> </div>
                <p>Você não esqueceu nenhum flashcard!</p>
                <p>{props.counter}/4 concluídos</p>
                <div className="sequence">
                    {props.sequence}
                </div>
            </div>
            ) //Footer para uma ou mais resposta "não lembrei"
    } else {
        return (
            <div className="footerFinal">
                <div className="firstLine"> <img src={sad} alt="sad"/> <p>Putz...</p> </div>
                <p>Ainda faltam alguns... Mas não desanime!</p>
                <p>{props.counter}/4 concluídos</p>
                <div className="sequence">
                    {props.sequence}
                </div>
            </div>
            )
    }
}