const i=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}};i();const c=()=>`
        <article class="card-game">
          <img src="/matching-game/assets/img/alura-pixel.png" alt="Logo da Alura">
        </article>
    `,u=(t=6)=>`
        <section class="board-game">
            ${c().repeat(t)}
        </section>
        `;var n=t=>`<p class="player-name">${t}</p>`;const d=document.querySelector("#root");d.insertAdjacentHTML("beforeend",` 
    ${n("Player1")}
    ${n("Player2")}
    ${u(6)}
    `);
