$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});

// $(document).ready(function(){
//     $(window).on("scroll", function() {
//         $(".advantages__item-img-descr-list").each(function() {
//             if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
//                 $(this).find('h5').each(function() {
//                     var $this = $(this);
//                     var countTo = parseInt($this.text().replace(/\D/g, '')); // Получаем число для счетчика
//                     $({ countNum: 0 }).animate({
//                         countNum: countTo
//                     },
//                     {
//                         duration: 1000,
//                         easing: 'linear',
//                         step: function() {
//                             $this.text(Math.floor(this.countNum));
//                         },
//                         complete: function() {
//                             $this.text(this.countNum);
//                         }
//                     });
//                 });
//             }
//         });
//     }).scroll();
// });


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


  //  $(document).ready(function(){
  //   $('.select').change(function(){
  //     var selectedValue = $(this).val();
  //     $('.pg-contacts__wrap').addClass('hidden');
  //     if (selectedValue === 'all') {
  //       $('.pg-contacts__wrap').removeClass('hidden');
  //     } else {
  //       $('#' + selectedValue).removeClass('hidden');
  //     }
  //   });
  // });
// document.addEventListener('DOMContentLoaded', function() {
//     var selectElement = document.querySelector('.select');
//     var listItems = document.querySelectorAll('.pg-contacts__wrap');

//     selectElement.addEventListener('change', function() {
//       var selectedValue = this.value;

//       listItems.forEach(function(item) {
//         if (selectedValue === 'all' || item.id === selectedValue) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       });
//     });
//   });
  // // Ждем, пока весь документ загрузится
  // $(document).ready(function(){
  //   // Назначаем обработчик события change на элемент select
  //   $('.select').change(function(){
  //     // Получаем выбранное значение
  //     var selectedValue = $(this).val();
  //     // Скрываем все элементы списка ul
  //     $('.pg-contacts__wrap').addClass('hidden');
  //     // Если выбрано значение "all", то показываем все элементы списка ul
  //     if (selectedValue === 'all') {
  //       $('.pg-contacts__wrap').removeClass('hidden');
  //     } else {
  //       // Иначе показываем только элемент списка ul с id, соответствующим выбранному значению
  //       $('#' + selectedValue).removeClass('hidden');
  //     }
  //   });
// });
  
//   $(document).ready(function(){
//     $('.select-2').change(function(){
//       var selectedValue = $(this).val();
//       $('.pg-contacts__wrap').addClass('hidden');
//       if (selectedValue === 'all') {
//         $('.pg-contacts__wrap').removeClass('hidden');
//       } else {
//         $('#' + selectedValue).removeClass('hidden');
//       }
//     });
// });
  
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
  
  // $(document).ready(function(){
  //   // При клике на кастомный выпадающий список показываем/скрываем опции и переворачиваем каретку
  //   $('.custom-dropdown').click(function() {
  //     $(this).toggleClass('active').siblings('.custom-dropdown-list').toggleClass('active');
  //   });

  //   // При клике на опцию обновляем значение кастомного списка и скрываем опции
  //   $('.custom-dropdown-list li').click(function() {
  //     var value = $(this).attr('data-value');
  //     var text = $(this).text();
  //     $('.custom-dropdown').text(text).removeClass('active');
  //     $('.custom-dropdown-list').removeClass('active');
  //     // Фильтрация контента по выбору из списка
  //     var selectedValue = $(this).attr('data-value');
  //     $('.team__list__item').addClass('hidden');
  //     if (selectedValue === 'all') {
  //       $('.team__list__item').removeClass('hidden');
  //     } else {
  //       $('#' + selectedValue).removeClass('hidden');
  //     }
  //   });
  // });