import Questions from "./Questions"

export default function Decks() {

    const deck1 = [{question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
    {question: "O React é _", answer: "uma biblioteca JavaScript para construção de interfaces"},
    {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
    {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
    {question: "O ReactDOM nos ajuda __ ", answer: "interagindo com a DOM para colocar componentes React na mesma"},
    {question: "Usamos o npm para __ ", answer: "gerenciar os pacotes necessários e suas dependências"},
    {question: "Usamos props para __ ", answer: "passar diferentes informações para componentes "},
    {question: "Usamos estado (state) para __ ", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
]

//Embaralha deck
function shuffleDeck(deck) {
    for(var i = deck.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [deck[i],deck[j]]=[deck[j],deck[i]];
    }
}

shuffleDeck(deck1)

//Para pegar apenas 4 das 8 cartas do baralho
const questionsShown = []
for (let i=0; i<4; i++) {
    questionsShown.push(deck1[i])
} 

return <Questions deck={questionsShown} />

}