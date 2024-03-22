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