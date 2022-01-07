import './style.css'
import PlayerGame from '../../components/PlayerGame'
import VsPlayer from '../../components/VsPlayer'

export default () => {
  return /* html */`
        <header class='score-board'>
            ${PlayerGame('Player1')}
            ${VsPlayer()}
            ${PlayerGame('Player2')}
        </header>
    `
}
