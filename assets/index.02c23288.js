const i=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}};i();const c=()=>`
        <article class="card-game">
          <img src="/matching-game/assets/img/alura-pixel.png" alt="Logo da Alura">
        </article>
    `,l=(n=6)=>`
        <section class="board-game">
            ${c().repeat(n)}
        </section>
        `,u=document.querySelector("#root"),d=l(6);u.insertAdjacentHTML("beforeend",d);
