export default function Footer(props) {

    return (
    <div className="footer">
        <p>{props.result}/4 concluídos</p>
        <div className="sequence">
            {props.sequence}
        </div>
    </div>
    )
}