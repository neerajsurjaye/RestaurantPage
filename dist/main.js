(()=>{"use strict";let e=(()=>{let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),n=document.createElement("div"),d=document.createElement("div"),o=document.createElement("div"),m=document.getElementById("content"),a=document.createElement("div");return e.id="nav-bar",t.id="logo",i.id="buttons",n.id="home",d.id="menu",o.id="about",a.classList.add("line"),t.textContent="PROJECT:RESTAURANT",n.textContent="home",d.textContent="menu",o.textContent="ABOUT",{init:()=>{m.appendChild(e),e.appendChild(t),e.appendChild(a),e.appendChild(i),i.appendChild(n),i.appendChild(d),i.appendChild(o)}}})(),t=(()=>{let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),n=document.getElementById("content");return e.id="main-section-home",t.id="section-header-home",i.id="section-body",t.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit.",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque enim fugiat corporis ipsum illum nam quia voluptate velit accusamus, magnam officia nulla aliquid sunt quos facere? Voluptatibus porro itaque, amet, magnam nemo eveniet sed facere vero excepturi cupiditate aliquam.",{init:()=>{n.appendChild(e),e.appendChild(t),e.appendChild(i)},remove:()=>{document.getElementById("main-section-home")&&n.removeChild(e)}}})(),i=(()=>{let e=document.getElementById("content"),t=document.createElement("div"),i=document.createElement("div"),n=document.createElement("ol"),d=[];i.textContent="MENU",t.id="main-section-menu",i.id="menu-head",n.id="list";for(var o=0;o<4;o++)d[o]=document.createElement("li"),d[o].classList.add("list-item"),d[o].textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit.",n.appendChild(d[o]);return{init:()=>{e.appendChild(t),t.appendChild(i),t.appendChild(n)},remove:()=>{document.getElementById("main-section-menu")&&(t.removeChild(n),e.removeChild(t))}}})(),n=(()=>{let e=document.createElement("div"),t=document.createElement("div"),i=document.createElement("div"),n=document.getElementById("content");return t.textContent="ABOUT",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eaque enim fugiat corporis ipsum illum nam quia voluptate velit accusamus, magnam officia nulla aliquid sunt quos facere? Voluptatibus porro itaque, amet, magnam nemo eveniet sed facere vero excepturi cupiditate aliquam.",e.id="main-section-about",t.id="section-header",i.id="section-body",{init:()=>{n.appendChild(t),t.appendChild(i),t.appendChild(i)},remove:()=>{document.getElementById("section-header")&&n.removeChild(t)}}})(),d=(()=>{let e=document.getElementById("content"),t=document.createElement("div");return t.id="footer",t.textContent="© Lorem ipsum dolor sit.",{init:()=>{e.appendChild(t)}}})();e.init(),d.init(),t.init(),document.getElementById("home").classList.add("active");let o=()=>{let e=document.getElementById("buttons").childNodes;console.log(e);for(let t of e)t.classList.remove("active")};document.getElementById("buttons").addEventListener("click",(e=>{"home"==e.target.id?(t.init(),i.remove(),n.remove(),o(),e.target.classList.add("active")):"menu"==e.target.id?(t.remove(),i.init(),n.remove(),o(),e.target.classList.add("active")):"about"==e.target.id&&(t.remove(),i.remove(),n.init(),o(),e.target.classList.add("active"))}))})();