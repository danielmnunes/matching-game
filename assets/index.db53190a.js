const l=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}};l();const s=(t="daniel")=>`
        <article class="card-game">
          <img src="/matching-game/assets/img/${t}.png" alt="Logo do ${t}">
        </article>
    `;var d=()=>(window.cardFrontBack={},window.cardFrontBack.handleClick=t=>{t.target.closest(".card-front-back").classList.toggle("-active")},`
        <article class='card-front-back' onClick='cardFrontBack.handleClick(event)'>
            <div class='card -front'>
              ${s()}
            </div>

            <div class='card -back'>
              ${s("js")}
            </div>
        </article>
        `);const u=(t=3)=>`
        <section class='board-game'>
            ${d().repeat(t)}
        </section>
        `;var i=t=>`<p class='player-name'>${t}</p>`,f=()=>`
        <header class='score-board'>
            ${i("Player1")}
            ${i("Player2")}
        </header>
    `;const m=document.querySelector("#root");m.insertAdjacentHTML("beforeend",`
    ${f()}
    ${u(6)}
    `);
