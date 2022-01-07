import './style.css'
import PlayerGame from '../../components/PlayerGame'
import VsPlayer from '../../components/VsPlayer'
import PlayerScore from '../../components/PlayerScore'

export default () => {
  return /* html */`
        <header class='score-board'>
            ${PlayerGame('Player1')}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(2)}
            ${PlayerGame('Player2')}
        </header>
    `
}
