import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BoardGame from "./src/objects/BoardGame"
import PlayerGame from './src/components/PlayerGame'

const $root = document.querySelector("#root")

$root.insertAdjacentHTML(
    "beforeend",
    ` 
    ${PlayerGame("Player1")}
    ${PlayerGame("Player2")}
    ${BoardGame(6)}
    `
)