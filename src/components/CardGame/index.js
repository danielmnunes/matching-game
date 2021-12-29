import './style.css'

const CardGame = (icon = 'daniel') => {
  return /* html */`
        <article class="card-game">
          <img src="/matching-game/assets/img/${icon}.png" alt="Logo do ${icon}">
        </article>
    `
}

export default CardGame
