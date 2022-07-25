import React from "react"
import WelcomePage from "./WelcomePage"
import RecallStart from "./RecallStart"
import "../css/reset.css"
import "../css/style.css"

export default function App() {

    const [page, setPage] = React.useState("tela1") 

    if (page === "tela1") {
        return (
        <WelcomePage setPage={setPage} />
        )
    } else if (page === "tela2") {
        return (
            <RecallStart />
        )
    }
}