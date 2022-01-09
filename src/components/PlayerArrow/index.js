import './style.css'

export default function PlayerArrow (currentPlayer = 1) {
  return /* html */ `   
        <img data-currentPlayer=${currentPlayer} class="player-arrow" src="/matching-game/assets/img/arrow-down.png" alt="Flecha para baixo que indica jogador selecionado">      
    `
}
