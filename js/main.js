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

$('#makeOrderText span').text(projectName);
console.log(webapp);
$('body').css('background-color', webapp.backgroundColor);
$('header.content__header, .order__card-BTN, .content__BTN').css('background-color', webapp.MainButton.color);
$('.order__badge, .order__card-input').css('background-color', `${webapp.MainButton.color}40`);
$('p.content__header-projectName, .order__card-BTN, .content__BTN').css('color', webapp.MainButton.textColor);


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
			$('.content__BTN').removeClass('hiden');
		}
		var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
		order_list[$(this).parent().parent().attr('id').split('-')[1]] = productValue__temp+1;
		$(this).parent().children().addClass('small').removeClass('hiden');
		$(this).text('-').css('background-color', '#FA5050');
		$(this).parent().children('.order__card-input.additBtn').val(1);
	}
})