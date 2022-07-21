import WelcomePage from "./components/WelcomePage"
import RecallStart from "./components/RecallStart"
import React from "react"


export default function App() {
    
    const [page, setPage] = React.useState("tela1")

    if (page === "tela1") {
        return (
        <WelcomePage setPage={setPage} page={page}/>
        )
    } else if (page === "tela2") {
        return (
        <RecallStart />
        )
    }
}