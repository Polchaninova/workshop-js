// // Функція для відображення модального вікна
// function displayModal(el) {
//     modalCard.innerHTML = renderModalCard(el);
//     //отримати з розмітки кнопку close та додати обробник події
//     const closeModalCard = document.getElementById('closeModalCard');
//     closeModalCard.addEventListener('click', closeModal);
// }

// // Додати обробник події для кожної карти
// product.forEach((el, index) => {
//     el.addEventListener('click', () => {
//         const el = productCards[index];
//         displayModal(el);
//         modalCard.style.display = 'block';
//         console.log(el);
//         console.log(index);
//     });
// });

// //Функція для закриття модалки
// function closeModal() {
//     modalCard.style.display = 'none';
//     modalCard.innerHTML = ''; // Очищення контейнера
// }

// function renderModalCard({ urlToImage, title, tags, content, date }) {
//     return `<div class="modal-content">
//                 <button id="closeModalCard" class="close">&times;</button>
//                     <img id="modalCardImg" class="strategy__image" src="${urlToImage}" alt="strategy">
//                     <p id="modalCardData" class="modal-strategy-data">${date}</p>
//                     <h2 id="modalCardName" class="modal-strategy-name">${title}</h2>
//                     <p id="modalCardDescription" class="modal-strategy-description">${content}</p>
//                     <div class="strategy__tags tags modal-strategy__tag">${tags}</div>
//                     </div>`
// }

// class ModalCard {
//     static productCards = [
//         {
//             id: 1,
//             title: 'Increasing Prosperity With Positive Thinking',
//             urlToImage: './src/img/strategies/1.jpg',
//             tags: ['Art', 'Design'],
//             content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
//             date: '01.01.2020'
//         },
//         {
//             id: 2,
//             title: 'Motivation Is The First Step To Success',
//             urlToImage: './src/img/strategies/2.jpg',
//             tags: ['Culture'],
//             content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
//             date: '01.01.2020'
//         },
//         {
//             id: 3,
//             title: 'Success Steps For Your Personal Or Business Life',
//             urlToImage: './src/img/strategies/3.jpg',
//             tags: ['Culture', 'Design', 'Art'],
//             content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
//             date: '01.01.2020'
//         },
//         {
//             id: 4,
//             title: ' Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
//             urlToImage: './src/img/strategies/4.jpg',
//             tags: ['Culture', 'Design', 'Art'],
//             content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
//             date: '01.01.2020'
//         },
//         {
//             id: 5,
//             title: 'Increasing Prosperity With Positive Thinking',
//             urlToImage: './src/img/strategies/5.jpg',
//             tags: ['Design'],
//             content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
//             date: '01.01.2020'
//         },
//     ];
//     constructor(productCards, modalCard, openCard) {
//         this.productCards = productCards;
//         this.modalCard = document.getElementById(modalCard);
//         this.openCard = document.querySelectorAll(openCard); // Отримати всі елементи з класом "product"
//         // this.openCard.addEventListener('click', this.openModal.bind(this));
//     }
//     // Функція для відображення модального вікна
//     displayModal(el) {
//         this.modalCard.innerHTML = renderModalCard(el);
//         //отримати з розмітки кнопку close та додати обробник події
//         const closeModalCard = document.getElementById('closeModalCard');
//         return closeModalCard.addEventListener('click', closeModal);
//     }

//     openModal() {
//         const modalCard = document.getElementById('modalCard');
//         const product = document.querySelectorAll('.product'); // Отримати всі елементи з класом "product"
//         // Додати обробник події для кожної карти
//         product.forEach((el, index) => {
//             el.addEventListener('click', () => {
//                 const el = this.productCards[index];
//                 displayModal(el);
//                 modalCard.style.display = 'block';
//             });
//         });
//     }

//     renderModalCard({ urlToImage, title, tags, content, date }) {
//         return `<div class="modal-content">
//                     <button id="closeModalCard" class="close">&times;</button>
//                         <img id="modalCardImg" class="strategy__image" src="${urlToImage}" alt="strategy">
//                         <p id="modalCardData" class="modal-strategy-data">${date}</p>
//                         <h2 id="modalCardName" class="modal-strategy-name">${title}</h2>
//                         <p id="modalCardDescription" class="modal-strategy-description">${content}</p>
//                         <div class="strategy__tags tags modal-strategy__tag">${tags}</div>
//                         </div>`
//     }

//     closeModal() {
//         const modalCard = document.getElementById('modalCard');
//         modalCard.style.display = 'none';
//         modalCard.innerHTML = ''; // Очищення контейнера
//     }
// }
// console.log(new ModalCard('product'));
// const modal2 = new ModalCard('productCards', '.product');


// !
// const modal2 = new ModalForm('modalCard', 'openModalCard', 'closeModalCard');


// const openModalBtn = document.getElementById("openModalBtn");
// const closeModalBtn = document.getElementById("closeModalBtn");
// const modal = document.getElementById("modalForm");



// openModalBtn.addEventListener("click", () => {
//     modal.style.display = "block";
// });

// closeModalBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

// window.addEventListener("click", (event) => {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });

// class ProductList {
//     constructor(products) {
//         this.products = products;
//         this.init()

//     }
//     init() {
//         products.forEach((el, index) => {
//             el.addEventListener('click', () => {
//                 const el = productCards[index];
//                 displayModal(el);
//                 modalCard.style.display = 'block';
//                 console.log(el);
//                 console.log(index);
//             });
//         });
//     }
//     displayModal(el) {
//         modalCard.innerHTML = this.renderModalCard(el);
//         //отримати з розмітки кнопку close та додати обробник події
//         const closeModalCard = document.getElementById('closeModalCard');
//         closeModalCard.addEventListener('click', closeModal);
//     }


//     renderModalCard({ urlToImage, title, tags, content, date }) {
//         return `<div class="modal-content">
//                 <button id="closeModalCard" class="close">&times;</button>
//                     <img id="modalCardImg" class="strategy__image" src="${urlToImage}" alt="strategy">
//                     <p id="modalCardData" class="modal-strategy-data">${date}</p>
//                     <h2 id="modalCardName" class="modal-strategy-name">${title}</h2>
//                     <p id="modalCardDescription" class="modal-strategy-description">${content}</p>
//                     <div class="strategy__tags tags modal-strategy__tag">${tags}</div>
//                     </div>`
//     }
// }

// new ProductList(productCards);

//! slider
// console.log(productCards);
// const slider = document.querySelector('.slider');//modalCard
// const slides = document.querySelectorAll('.slide');//item
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentIndex = 0;

// function updateSlider() {
//     const slideWidth = slides[0].offsetWidth;
//     const newPosition = -currentIndex * slideWidth;
//     slider.style.transform = `translateX(${newPosition}px)`;
// }

// function showSlide(index) {
//     if (index < 0) {
//         currentIndex = slides.length - 1;
//     } else if (index >= slides.length) {
//         currentIndex = 0;
//     } else {
//         currentIndex = index;
//     }
//     updateSlider();
// }

// prevBtn.addEventListener('click', () => {
//     showSlide(currentIndex - 1);
// });

// nextBtn.addEventListener('click', () => {
//     showSlide(currentIndex + 1);
// });

// // Ініціалізація слайдера
// showSlide(currentIndex);