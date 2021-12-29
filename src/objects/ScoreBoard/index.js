import './style.css'
import PlayerGame from '../../components/PlayerGame'

export default () => {
  return /* html */`
        <header class='score-board'>
            ${PlayerGame('Player1')}
            ${PlayerGame('Player2')}
        </header>
    `
}
