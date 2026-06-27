import{a as f,S as m,i as a}from"./assets/vendor-BGqwtSVv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="36810234-b5e1d7960ec1148affe35137c",g="https://pixabay.com/api/";function h(i){const r={key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(g,{params:r}).then(o=>o.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:p})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>
          <ul class="info">
            <li class="info-item">
              <p>Likes</p>
              <p>${t}</p>
            </li>
            <li class="info-item">
              <p>Views</p>
              <p>${s}</p>
            </li>
            <li class="info-item">
              <p>Comments</p>
              <p>${u}</p>
            </li>
            <li class="info-item">
              <p>Downloads</p>
              <p>${p}</p>
            </li>
          </ul>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}function S(){l.innerHTML=""}function b(){c.classList.remove("is-hidden")}function w(){c.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",q);function q(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(r===""){a.warning({message:"Please enter a search word!",position:"topRight"});return}S(),b(),h(r).then(o=>{if(o.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{a.error({message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{w(),i.target.reset()})}
//# sourceMappingURL=index.js.map
