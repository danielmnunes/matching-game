import "./style.css"
import CardGame from "../../components/CardGame";

const BoardGame = (amountCards = 6) => {
    return /*html*/`
        <section class="board-game">
            ${CardGame().repeat(amountCards)}
        </section>
        `
}

export default BoardGame;