const v=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(r){if(r.ep)return;r.ep=!0;const e=i(r);fetch(r.href,e)}};v();function g(a="vs"){return`
        <span class="vs-player">${a}</span>
    `}function y(a,c){return`
        <p class="player-name" data-player=${c}>${a}</p>
    `}function b(){return`
        <div class="player-point"></div>
    `}function p(a,c){return`
        <article class="player-score" data-player=${c}>                      
            ${b().repeat(a)} 
        </article>
    `}function h(a=1){return`   
        <img data-currentPlayer=${a} class="player-arrow" src="/matching-game/assets/img/arrow-down.png" alt="Flecha para baixo que indica jogador selecionado">      
    `}function S(a){window.scoreBoard={},window.scoreBoard.resetPoints=()=>{document.querySelectorAll(".player-point").forEach(s=>{s.classList.remove("-active")})},window.addEventListener("load",()=>{window.scoreBoard.$scoreBoard=document.querySelector(".score-board"),window.scoreBoard.$scoreBoard.addEventListener("moveMade",e=>{if(e.detail.correct){const d=window.scoreBoard.$scoreBoard.querySelector(`.player-score[data-player='${e.detail.currentPlayer}']`).querySelectorAll(".player-point"),u=r(d);n(u)}else{const s=i(e.detail.currentPlayer);c(s)}})});const c=e=>{document.querySelector(".player-arrow").setAttribute("data-currentPlayer",e)},i=e=>e==1?2:1,n=e=>{e.classList.add("-active")},r=e=>[...e].find(s=>!s.classList.contains("-active"));return`
        <header class="score-board">  
            ${h(1)}  
            ${y("Player1",1)}     
            ${p(a,1)} 
            ${g()}   
            ${p(a,2)}       
            ${y("Player2",2)}  
        </header>
    `}function $(a="daniel.png",c="Logo do Daniel"){return`
        <article class="card-game">
            <img src="/matching-game/assets/img/${a}" alt="${c}">
        </article>
    `}function C(a,c){return window.cardFrontBack={},window.cardFrontBack.handleClick=i=>{const r=i.target.closest(".card-front-back"),s=document.querySelector(".board-game").querySelectorAll(".card-front-back.-active.-not-correct");!r.classList.contains("-active")&&s.length<2&&r.classList.toggle("-active")},`
        <article class="card-front-back -not-correct" onClick="window.cardFrontBack.handleClick(event)">        
            <div class="card -front">
                ${$()}
            </div>
            <div class="card -back">
                ${$(a,c)}
            </div>        
        </article>
    `}const P=[{icon:"logo-javascript.png",altIcon:"Logo do JavaScript"},{icon:"logo-html.png",altIcon:"Logo do HTML"},{icon:"logo-css.png",altIcon:"Logo do CSS3"}];function q(a){window.boardGame={},window.boardGame.handleClick=()=>{const t=document.querySelector(".board-game").querySelectorAll(".card-front-back.-active.-not-correct"),m=document.querySelector(".player-arrow").getAttribute("data-currentPlayer");t.length!==0&&(c(t)&&!u(t)?setTimeout(()=>{e(m),window.boardGame.flipAndHideCards(t)},1e3):u(t)&&(e(m,!0),d(t)),f(a)&&setTimeout(()=>{s(m)},1e3))},window.boardGame.flipAndHideCards=o=>{o.forEach(t=>t.classList.remove("-active"))};const c=o=>o.length%2==0,i=(o,t)=>{for(var l=t.length-1;l>=o;l--)t.splice(Math.floor(Math.random()*t.length),1);return t},n=()=>[...P.map(o=>C(o.icon,o.altIcon))],r=o=>{const t=n(),l=i(o/2,t);return[...l,...l].sort(()=>Math.random()-.5).join("")},e=(o,t=!1)=>{console.log("dispatch event"),window.scoreBoard.$scoreBoard.dispatchEvent(new CustomEvent("moveMade",{detail:{currentPlayer:o,correct:t}}))},s=o=>{const t=document.querySelector(".winner-modal");document.querySelector(".score-board").dispatchEvent(new CustomEvent("win",{detail:{currentPlayer:o}})),t.dispatchEvent(new CustomEvent("win",{detail:{currentPlayer:o}}))},d=o=>{o.forEach(t=>{t.classList.remove("-not-correct"),t.classList.add("-correct")})},u=o=>{const t=[...o].map(l=>l.querySelector(".card.-back > .card-game > img").getAttribute("src"));return t[0]===t[1]},f=o=>document.querySelector(".board-game").querySelectorAll(".card-front-back.-active.-correct").length===o;return`
        <section class="board-game" onClick="boardGame.handleClick()">
            ${r(a)}        
        </section>      
    `}function k(){return`
        <p class="player-winner"></p>
    `}function B(){return`
        <p class="winner-message">Winner!!!</p>
    `}function L(){return`
        <img src="/matching-game/assets/img/winner-icon.png" alt="Trof\xE9u">
    `}function A(){return window.restartButton={},window.restartButton.handleClick=()=>{document.querySelector(".board-game").querySelectorAll(".card-front-back"),document.querySelector(".player-arrow"),document.querySelector(".winner-modal"),location.reload()},`
        <button class="restart-button" onClick="restartButton.handleClick()">restart</button>
    `}function M(){window.winnerModal={},window.winnerModal.hideModal=()=>{const n=document.querySelector(".winner-modal");n.style.visibility="hidden",n.style.opacity="0"},window.addEventListener("load",()=>{const n=document.querySelector(".winner-modal");n.addEventListener("win",r=>{const e=r.detail.currentPlayer,s=i(e),d=n.querySelector(".player-winner");c(s,d),a(n)})});const a=n=>{n.style.visibility="visible",n.style.opacity="1"},c=(n,r)=>{r.innerText=n},i=n=>document.querySelector(".score-board").querySelector(`.player-name[data-player='${n}']`).innerText;return`
    <div class="winner-modal">
        ${k()}
        ${B()}
        ${L()}
        ${A()}
    </div>
    `}const E=document.querySelector("#app"),w=6;E.insertAdjacentHTML("beforeend",`
    ${M()}    
    ${S(Math.ceil(w/2))}    
    ${q(w)}   
`);
