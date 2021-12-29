const i=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}};i();const c=(t="daniel")=>`
        <article class="card-game">
          <img src="/matching-game/assets/img/${t}.png" alt="Logo do ${t}">
        </article>
    `;var d=()=>`
        <article class='card-front-back'>
            <div class='card -front'>
              ${c()}
            </div>

            <div class='card -back'>
              ${c("js")}
            </div>
        </article>
        `;const u=(t=3)=>`
        <section class='board-game'>
            ${d().repeat(t)}
        </section>
        `;var n=t=>`<p class='player-name'>${t}</p>`,f=()=>`
        <header class='score-board'>
            ${n("Player1")}
            ${n("Player2")}
        </header>
    `;const m=document.querySelector("#root");m.insertAdjacentHTML("beforeend",`
    ${f()}
    ${u(2)}
    `);
