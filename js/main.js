var webapp = window.Telegram.WebApp, projectName = 'Durger King', isEmptyOrderList = true;
var order_list = {
	'pita': 0,
	'pita_cheese': 0,
	'hamburger': 0,
	'cheeseburger': 0
}

function isEmptyOrderListFunc(){
	for (var i = 0; i <= Object.keys(order_list).length-1; i++) {
		if(Object.values(order_list)[i] > 0)
			return false;
	}
	return true;
}
$('body').empty();
$('body').append(`<input value="${location.href}">`);

$('#makeOrderText span, p.content__header-projectName').text(projectName);
console.log(webapp);
$('.content__page, .content__header-menu-container').css('background-color', webapp.backgroundColor);
$('header.content__header, .order__card-BTN, .content__BTN').css('background-color', webapp.MainButton.color);
$('.order__badge, .order__card-input').css('background-color', `${webapp.MainButton.color}80`);
$('p.content__header-projectName, .order__card-BTN, .content__BTN').css('color', webapp.MainButton.textColor);

if(webapp.colorScheme != 'theme-dark')
	$('body').removeClass('theme-dark theme-light').addClass(`theme-${webapp.colorScheme}`);

$('.order__card-BTN').on('click', function(){
	if($(this).text() == '-'){
		var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
		if(productValue__temp > 1){
			$(this).parent().children('.order__card-input.additBtn').val(productValue__temp-1);
			order_list[$(this).parent().parent().attr('id').split('-')[1]] = productValue__temp-1;
		}
		else{
			var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
			order_list[$(this).parent().parent().attr('id').split('-')[1]] = productValue__temp-1;
			if(isEmptyOrderListFunc()){
				isEmptyOrderList = true;
				$('.content__BTN').addClass('hiden');
				$('.content__page').removeClass('buttonVisible');
			}
			$(this).parent().children().removeClass('small').addClass('hiden');
			$(this).removeClass('hiden');
			$(this).text('Добавить').css('background-color', webapp.MainButton.color);
			$(this).parent().children('.order__card-input.additBtn').val(1);
		}
	}else if($(this).text() == '+'){
		var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
		order_list[$(this).parent().parent().attr('id').split('-')[1]] = productValue__temp+1;
		$(this).parent().children('.order__card-input.additBtn').val(productValue__temp+1);
	}else{
		if(isEmptyOrderList){
			isEmptyOrderList = false;
			$('.content__BTN').removeClass('hiden')
			$('.content__page').addClass('buttonVisible');
		}
		var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
		order_list[$(this).parent().parent().attr('id').split('-')[1]] = productValue__temp+1;
		$(this).parent().children().addClass('small').removeClass('hiden');
		$(this).text('-').css('background-color', '#FA5050');
		$(this).parent().children('.order__card-input.additBtn').val(1);
	}
})
$('.content__header-menu-openBTN').on('click', function(){
	if($('.content__header-menu-container').hasClass('active')){
		$('.content__header-menu-container').removeClass('active').css('background-color', webapp.backgroundColor);
	}else{
		$('.content__header-menu-container').addClass('active').css('background-color', webapp.MainButton.color);
	}
	$(window).on('click', function(e){
		if(!$($(e.target)[0]).hasClass('content__header-menu-openBTN')){
			$('.content__header-menu-container').removeClass('active').css('background-color', webapp.backgroundColor);
			$(window).off('click');
		}
	})
})
