const d=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};d();const n=(r="daniel")=>`
        <article class="card-game">
          <img src="/matching-game/assets/img/${r}.png" alt="Logo do ${r}">
        </article>
    `;var u=()=>(window.cardFrontBack={},window.cardFrontBack.handleClick=r=>{r.target.closest(".card-front-back").classList.toggle("-active")},`
        <article class='card-front-back' onClick='cardFrontBack.handleClick(event)'>
            <div class='card -front'>
              ${n()}
            </div>

            <div class='card -back'>
              ${n("js")}
            </div>
        </article>
        `);const f=(r=3)=>`
        <section class='board-game'>
            ${u().repeat(r)}
        </section>
        `;var l=r=>`<p class='player-name'>${r}</p>`;var p=(r="vs")=>`<span class='vs-player'>${r}</span>`;var i=(r=0)=>`
    <ol class="player-score" data-points="${r}">
        <li class="pointer">Um</li>
        <li class="pointer">Dois</li>
        <li class="pointer">Tr\xEAs</li>
    </ol>
  `,y=()=>`
        <header class='score-board'>
            ${l("Player1")}
            ${i(1)}
            ${p()}
            ${i(2)}
            ${l("Player2")}
        </header>
    `;const $=document.querySelector("#root");$.insertAdjacentHTML("beforeend",`
    ${y()}
    ${f(6)}
    `);
