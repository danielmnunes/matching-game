import './style.css'
import CardFrontBack from '../../components/CardFrontBack'

const BoardGame = (amountCards = 3) => {
  return /* html */`
        <section class='board-game'>
            ${CardFrontBack().repeat(amountCards)}
        </section>
        `
}

export default BoardGame
