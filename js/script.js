$(document).ready(function () {
  $(".header-burger").on("click", function () {
    $(".burger-menu").addClass("is-active");
  });

  $(".mobile-menu-close").on("click", function () {
    $(".burger-menu").removeClass("is-active");
  });
});
const refs2 = {
  menuServ: document.querySelector("#menu-item-1"),
  openServ: document.getElementById("menu-serv"),
};

let isMenuServOpen = false;

const openMenuServ = () => {
  refs2.openServ.classList.remove("is-hidden");
  refs2.menuServ.classList.add("active");
  isMenuServOpen = true;
};

const closeMenuServ = () => {
  refs2.openServ.classList.add("is-hidden");
  refs2.menuServ.classList.remove("active");
  isMenuServOpen = false;
};

refs2.menuServ.addEventListener("mouseover", openMenuServ);
refs2.menuServ.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!refs2.menuServ.matches(":hover") && !refs2.openServ.matches(":hover")) {
      closeMenuServ();
    }
  }, 100);
});

refs2.openServ.addEventListener("mouseover", openMenuServ);
refs2.openServ.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (!refs2.menuServ.matches(":hover") && !refs2.openServ.matches(":hover")) {
      closeMenuServ();
    }
  }, 100);
});

  $(document).ready(function(){
    $('.pg-sheno-content__menu li').click(function(){
      $('.pg-sheno-content__menu li').removeClass('active');
      $(this).addClass('active');
    });
  });
  
 $(document).ready(function(){
    // При клике на кастомный выпадающий список показываем/скрываем опции и переворачиваем каретку
    $('.custom-dropdown').click(function() {
      $(this).toggleClass('active').siblings('.custom-dropdown-list').toggleClass('active');
    });

    // При клике на опцию обновляем значение кастомного списка и скрываем опции
    $('.custom-dropdown-list li').click(function() {
      var value = $(this).attr('data-value');
      var text = $(this).text();
      $('.custom-dropdown').text(text).removeClass('active');
      $('.custom-dropdown-list').removeClass('active');
      // Фильтрация контента по выбору из списка
      var selectedValue = $(this).attr('data-value');
      $('.select-city').addClass('hidden');
      if (selectedValue === 'all') {
        $('.select-city').removeClass('hidden');
      } else {
        $('#' + selectedValue).removeClass('hidden');
      }
    });
 });

document.addEventListener("DOMContentLoaded", function() {
  var names = document.querySelectorAll(".p-reviews-3s__name");
  var colors = ['#FFF0D7', '#D0F7F2', '#EDF2FF'];
  names.forEach(function(name, index) {
    var avatar = name.closest(".p-reviews-3s__item").querySelector(".avatar");
    var firstName = name.textContent.trim().split(" ")[0].charAt(0); // Берем первую букву первого слова имени
    var initial = document.createElement("span");
    initial.classList.add("initial");
    initial.textContent = firstName;
    avatar.appendChild(initial);
    avatar.style.backgroundColor = colors[index % colors.length];
  });
});

// Получить все элементы с классом "slider-container"
const sliderContainers = document.querySelectorAll('.slider-container');

// Для каждого контейнера
sliderContainers.forEach(container => {
  // Получить значение отзывов
  const reviewsCount = parseInt(container.nextElementSibling.textContent);

  // Получить ползунок в текущем контейнере
  const slider = container.querySelector('.slider');

  // Если количество отзывов равно 0, установить стиль ползунка как точку серого цвета размером 6x6 пикселей
  if (reviewsCount === 0) {
    slider.style.width = '6px';
    slider.style.height = '6px';
    slider.style.backgroundColor = '#E1E1E1';
    slider.style.borderRadius = '50%';
  } else {
    // Иначе установить ширину ползунка в зависимости от количества отзывов
    slider.style.width = (reviewsCount * 10) + 'px'; // Примерное значение ширины ползунка в зависимости от количества отзывов
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const reviews = document.querySelectorAll(".p-reviews-3s__item");
  const itemsPerPage = 5;
  const numPages = Math.ceil(reviews.length / itemsPerPage);
  const paginationList = document.querySelector(".pagination-list");

  // Функция для создания ссылок на страницы пагинации
  function createPaginationLinks() {
    for (let i = 1; i <= numPages; i++) {
      const pageItem = document.createElement("li");
      pageItem.classList.add("pagination-item");
      if (i === 1) {
        pageItem.classList.add("active");
      }
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.classList.add("pagination-link");
      pageLink.textContent = i;
      pageItem.appendChild(pageLink);
      paginationList.appendChild(pageItem);
    }
  }

  // Проверяем, были ли уже добавлены ссылки на страницы пагинации
  if (paginationList.children.length === 0) {
    createPaginationLinks();
  }

  // Функция для отображения нужных отзывов при клике на ссылку пагинации
  function showReviews(pageNumber) {
    const startIdx = (pageNumber - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    reviews.forEach((review, idx) => {
      if (idx >= startIdx && idx < endIdx) {
        review.style.display = "flex";
      } else {
        review.style.display = "none";
      }
    });
  }

  // Обработчик событий для клика на ссылку пагинации
  paginationList.addEventListener("click", function(event) {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains("pagination-link")) {
      const pageNumber = parseInt(target.textContent);
      showReviews(pageNumber);
      // Удаляем активный класс со всех ссылок и добавляем его выбранной странице
      const pageLinks = document.querySelectorAll(".pagination-link");
      pageLinks.forEach(link => link.parentNode.classList.remove("active"));
      target.parentNode.classList.add("active");
    }
  });

  // Показываем первые 5 отзывов, остальные скрываем
  showReviews(1);
});

document.addEventListener("DOMContentLoaded", function() {
        const reviewsContainer = document.querySelector(".p-reviews-3s");
        const reviews = Array.from(reviewsContainer.querySelectorAll(".p-reviews-3s__item"));

        // Функция для применения фильтрации по дате от ближайшей к текущей дате
        function sortByNearestDate() {
            const currentDate = new Date();

            // Создаем массив отзывов с их датами и разницей во времени до текущей даты
            const reviewsWithDates = reviews.map(review => ({
                element: review,
                date: new Date(review.querySelector("p").textContent),
                diff: Math.abs(new Date(review.querySelector("p").textContent) - currentDate)
            }));

            // Сортируем отзывы по разнице во времени
            reviewsWithDates.sort((a, b) => a.diff - b.diff);

            // Устанавливаем порядок отзывов на основе полученного порядка
            reviewsWithDates.forEach((review, index) => {
                reviewsContainer.appendChild(review.element);
            });
        }

        // Применяем фильтр по дате от ближайшей к текущей дате при загрузке страницы
        sortByNearestDate();
});
    
$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  // $("#accordeon .acc-head").on("click", f_acc);
  // $("#accordeon-step .accs1-head").on("click", f_accm1); 
  $("#accordeon-menu-mob .accm1-head").on("click", f_accm2);
  // $("#accordeon-menu-mob2 .accm2-head").on("click", f_accm3);   
});

// function f_acc() {
//   //скрываем все кроме того, что должны открыть
//   $("#accordeon .acc-body").not($(this).next()).slideUp(100);
//   // открываем или скрываем блок под заголовоком, по которому кликнули
//   $(this).next().slideToggle(100);
//   $(this).toggleClass("add-bg");
//   $("#accordeon .faq-open1").toggleClass("is-hidden");
//   // $(this).toggleClass("is-hidden");
//   $("#accordeon .faq-close1").toggleClass("is-hidden");
// //   $(this).toggleClass("is-hidden");
// }

// function f_accm1() {
//   $("#accordeon-step .accs1-body").not($(this).next()).slideUp(100);
//     $(this).next().slideToggle(100);
//     $(this).toggleClass("add-bg-s");
//     $("#accordeon-step .faq-open1").toggleClass("is-hidden");
//     $("#accordeon-step .faq-close1").toggleClass("is-hidden");
// }
function f_accm2() {
  $("#accordeon-menu-mob .accm1-body").not($(this).next()).slideUp(100);
  $(this).next().slideToggle(100);  
    //   $(this).toggleClass("add-bg-m1");
    $("#accordeon-menu-mob .faq-open1").toggleClass("is-hidden");
    $("#accordeon-menu-mob .faq-closed1").toggleClass("is-hidden");
   
}
// function f_accm3() {
//   $("#accordeon-menu-mob2 .accm2-body").not($(this).next()).slideUp(100);
//     $(this).next().slideToggle(100);
//     //   $(this).toggleClass("add-bg-m1");
//     // $("#accordeon-step .faq-open1").toggleClass("is-hidden");
//     // $("#accordeon-step .faq-close1").toggleClass("is-hidden");
   
// }

$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $("#accordeon-step .acc-head-st").on("click", f_acc);  
});
function f_acc() {
  //скрываем все кроме того, что должны открыть
  $("#accordeon-step .acc-body-st").not($(this).next()).slideUp(100);
  // открываем или скрываем блок под заголовоком, по которому кликнули
  $(this).next().slideToggle(100);
// если нужно добавить что-то к внешнему виду
   $(this).parent().toggleClass("add-bg");
  // используем find() для поиска элементов внутри текущего блока
  $(this).find(".faq-open1, .faq-closed1").toggleClass("is-hidden");
}

// document.addEventListener("DOMContentLoaded", function() {
//   const container = document.querySelector(".container-1");
//   const smallImagesContainer = document.getElementById("small-images");

//   const smallImages = [
//     "/img/hero-l.jpg",
//     "/img/hero-r.jpg",
//     // Add more small images as needed
//   ];

//   smallImages.forEach(function(imageSrc) {
//     const img = document.createElement("img");
//     img.src = imageSrc;
//     img.alt = "Small Image";
//     img.classList.add("small-image");

//     // Randomly position small images in the corners
//     const randomX = Math.floor(Math.random() * window.innerWidth);
//     const randomY = Math.floor(Math.random() * window.innerHeight);
//     img.style.top = `${randomY}px`;
//     img.style.left = `${randomX}px`;

//     container.appendChild(img);
//   });
// });