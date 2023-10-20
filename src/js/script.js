
class ModalForm {
  constructor(modalId, openButtonId, closeButtonId) {
    this.modal = document.getElementById(modalId);
    this.openButton = document.getElementById(openButtonId);
    this.closeButton = document.getElementById(closeButtonId);

    this.openButton.addEventListener('click', this.openModal.bind(this));
    this.closeButton.addEventListener('click', this.closeModal.bind(this));
  }

  openModal() {
    this.modal.style.display = 'block';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

}
const modalInit = new ModalForm('modalForm', 'openModalForm', 'closeModalForm');

const filterButtons = document.querySelectorAll('.filter-buttons button');
const products = document.querySelectorAll('.product');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterValue = button.getAttribute('data-filter');

    if (button.classList.contains('tag_selected')) {
      // Якщо кнопка вже активна, вимикаємо фільтр
      button.classList.remove('tag_selected');

      // Показуємо всі продукти
      products.forEach(product => {
        product.style.display = 'block';
      });
    } else {
      // Якщо кнопка не активна, вмикаємо фільтр
      // Спочатку знімаємо клас 'active' з усіх кнопок
      filterButtons.forEach(btn => {
        btn.classList.remove('tag_selected');
      });

      // Додаємо клас 'active' до натиснутої кнопки
      button.classList.add('tag_selected');

      // Фільтруємо продукти за вибраною категорією
      products.forEach(product => {
        if (filterValue === 'all' || product.classList.contains(filterValue)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  });
});
const modalCard = document.getElementById('modalCard');

const productCards = [
  {
    id: 1,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/1.jpg',
    tags: ['Art', 'Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 2,
    title: 'Motivation Is The First Step To Success',
    urlToImage: './src/img/strategies/2.jpg',
    tags: ['Culture'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 3,
    title: 'Success Steps For Your Personal Or Business Life',
    urlToImage: './src/img/strategies/3.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 4,
    title: ' Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
    urlToImage: './src/img/strategies/4.jpg',
    tags: ['Culture', 'Design', 'Art'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
  {
    id: 5,
    title: 'Increasing Prosperity With Positive Thinking',
    urlToImage: './src/img/strategies/5.jpg',
    tags: ['Design'],
    content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
    date: '01.01.2020'
  },
];

// Функція для відображення модального вікна
function displayModal(el) {
  modalCard.innerHTML = renderModalCard(el);
  //отримати з 'renderModalCard' кнопку close та додати обробник події
  const closeModalCard = document.getElementById('closeModalCard');
  closeModalCard.addEventListener('click', closeModal);
}

// Додати обробник події для кожної карти
products.forEach((el, index) => {
  el.addEventListener('click', () => {
    const el = productCards[index];
    displayModal(el);
    modalCard.style.display = 'block';
    console.log(displayModal(el));
  });
});

//Функція для закриття модалки
function closeModal() {
  modalCard.style.display = 'none';
  modalCard.innerHTML = ''; // Очищення контейнера
}

function renderModalCard({ urlToImage, title, tags, content, date }) {
  return `<div class="modal-content">
                <button id="closeModalCard" class="close">&times;</button>
                    <img id="modalCardImg" class="strategy__image" src="${urlToImage}" alt="strategy">
                    <p id="modalCardData" class="modal-strategy-data">${date}</p>
                    <h2 id="modalCardName" class="modal-strategy-name">${title}</h2>
                    <p id="modalCardDescription" class="modal-strategy-description">${content}</p>
                    <div class="strategy__tags tags modal-strategy__tag">${tags}</div>
                    </div>`
}
