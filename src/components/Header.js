import logoPequeno from "../imgs/logo-pequeno.png"

export default function Header() {
    return (
    <div className="header">
        <img src={logoPequeno} alt="logo pequeno" />
        <h1>ZapRecall</h1>
    </div>
    )
}
