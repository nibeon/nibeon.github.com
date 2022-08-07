$(document).ready(function() {
    // плавный скроллинг по внутренним ссылкам
    $("#nav").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
    
    // появление книпки "наверх" при прокрутке
    $(window).scroll(function(){
		if($(window).scrollTop()>120){
			$('#to-top').fadeIn(700);
		}else{
			$('#to-top').fadeOut(700);
		}
	});
    
    
    // сколлинг наверх при нажатии на кнопку "наверх"
    $(".to-top").click(function(event){
        //забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
    });
    
    
    $(".img").mouseover(function(event) {
        $(this).children(".hover").css("display", "block");
    });
    
    $(".img").mouseout(function(event) {
        $(this).children(".hover").css("display", "none");
    });
    
    
    // открытие и закрытие модальных окон
    
    // 1
    $("#for-modal-1").click(function(event) {
        $("#modal-1").addClass("active");
    });    
    $(".close-modal-1").click(function(event) {
        $("#modal-1").removeClass("active");
    });    
    
    // 2
    $("#for-modal-2").click(function(event) {
        $("#modal-2").addClass("active");
    });    
    $(".close-modal-2").click(function(event) {
        $("#modal-2").removeClass("active");
    }); 
    
    // 3
    $("#for-modal-3").click(function(event) {
        $("#modal-3").addClass("active");
    });    
    $(".close-modal-3").click(function(event) {
        $("#modal-3").removeClass("active");
    }); 
    
    // 4
    $("#for-modal-4").click(function(event) {
        $("#modal-4").addClass("active");
    });    
    $(".close-modal-4").click(function(event) {
        $("#modal-4").removeClass("active");
    }); 
    
    // 5
    $("#for-modal-5").click(function(event) {
        $("#modal-5").addClass("active");
    });    
    $(".close-modal-5").click(function(event) {
        $("#modal-5").removeClass("active");
    }); 
    
     // 5
    $("#for-modal-6").click(function(event) {
        $("#modal-6").addClass("active");
    });    
    $(".close-modal-6").click(function(event) {
        $("#modal-6").removeClass("active");
    });    
    
    // 
    $(".modal-footer button").hover(function(event){
       $(this).addClass("btn-primary");
    });
    
});