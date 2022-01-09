import './style.css'

export default function CardGame (icon = 'daniel.png', alt = 'Logo do Daniel') {
  return /* html */ `
        <article class="card-game">
            <img src="/matching-game/assets/img/${icon}" alt="${alt}">
        </article>
    `
}
