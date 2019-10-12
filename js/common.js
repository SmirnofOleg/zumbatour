$(document).ready(function () {
	var link = $('.menu-link');
	var link_active = $('.menu-link_active');
	var menu = $('.menu');
	var nav_link = $('.menu a') //убираем меню по клику на ссылку

	link.click(function () {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});

	nav_link.click(function () {
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});


	/*============стрелка вниз № 1 =============*/

	$(".arrow-bottom").click(function () {
		$("html, body").animate({
			scrollTop: $(".my-header").height() + 800
		}, "slow");
		return false;
	});


	/*============стрелка вниз № 2 =============*/


	$(".arrowTwo").click(function () {
		$("html, body").animate({
			scrollTop: $(".my-content").height() - 100
		}, "slow");
		return false;
	});


	// $('.arrowTwo').on('click', function (e) {
	// 	e.preventDefault(); // Запрещаем переход по ссылке
	// 	$(this).attr('href'), // Берем значение из ссылки как цель id="second-screen"
	// 		$(this).offset().top; // Ищем верхнюю координату у нашей цели

	// 	$('body,html').animate({
	// 		scrollTop: $(".section-form").height() + 800
	// 	}, "slow");
	// }); // Плавно проматываем до цели




	/*================настраиваем слайдер============*/
	$('.slider-block').slick();

	/*================анимация============*/


	AOS.init();

	/*настраиваем модальное окно*/
	$(document).ready(function () {
		$('.popup-btn').on('click', function (event) {
			event.preventDefault();
			$('.popup').fadeIn();
		});
		$('.popup-close').on('click', function (event) {
			event.preventDefault();
			$('.popup').fadeOut();
		});

	});
});