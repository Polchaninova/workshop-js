new class{openModal(){this.modal.style.display="block"}closeModal(){this.modal.style.display="none"}constructor(t,e,o){this.modal=document.getElementById(t),this.openButton=document.getElementById(e),this.closeButton=document.getElementById(o),this.openButton.addEventListener("click",this.openModal.bind(this)),this.closeButton.addEventListener("click",this.closeModal.bind(this))}}("modalForm","openModalForm","closeModalForm");const t=document.querySelectorAll(".filter-buttons button"),e=document.querySelectorAll(".product");t.forEach((o=>{o.addEventListener("click",(()=>{const s=o.getAttribute("data-filter");o.classList.contains("tag_selected")?(o.classList.remove("tag_selected"),e.forEach((t=>{t.style.display="block"}))):(t.forEach((t=>{t.classList.remove("tag_selected")})),o.classList.add("tag_selected"),e.forEach((t=>{"all"===s||t.classList.contains(s)?t.style.display="block":t.style.display="none"})))}))}));const o=document.getElementById("modalCard"),s=[{id:1,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/1.jpg",tags:["Art","Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:2,title:"Motivation Is The First Step To Success",urlToImage:"./src/img/strategies/2.jpg",tags:["Culture"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:3,title:"Success Steps For Your Personal Or Business Life",urlToImage:"./src/img/strategies/3.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:4,title:" Success Steps For Your Personal Or Business Life Plus Funny Image on the Back",urlToImage:"./src/img/strategies/4.jpg",tags:["Culture","Design","Art"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"},{id:5,title:"Increasing Prosperity With Positive Thinking",urlToImage:"./src/img/strategies/5.jpg",tags:["Design"],content:"Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?",date:"01.01.2020"}];function i(t){o.innerHTML=function({urlToImage:t,title:e,tags:o,content:s,date:i}){return`<div class="modal-content">\n                <button id="closeModalCard" class="close">&times;</button>\n                    <img id="modalCardImg" class="strategy__image" src="${t}" alt="strategy">\n                    <p id="modalCardData" class="modal-strategy-data">${i}</p>\n                    <h2 id="modalCardName" class="modal-strategy-name">${e}</h2>\n                    <p id="modalCardDescription" class="modal-strategy-description">${s}</p>\n                    <div class="strategy__tags tags modal-strategy__tag">${o}</div>\n                    </div>`}(t);document.getElementById("closeModalCard").addEventListener("click",a)}function a(){o.style.display="none",o.innerHTML=""}e.forEach(((t,e)=>{t.addEventListener("click",(()=>{const t=s[e];i(t),o.style.display="block",console.log(i(t))}))}));
//# sourceMappingURL=index.3f0e674d.js.map