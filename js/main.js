var webapp = window.Telegram.WebApp, projectName = 'Durger King';
$('#makeOrderText span').text(projectName);
console.log(webapp);
$('body').css('background-color', webapp.backgroundColor);
$('header.content__header, .order__card-BTN').css('background-color', webapp.MainButton.color);
$('.order__badge, .order__card-input').css('background-color', `${webapp.MainButton.color}40`);
$('p.content__header-projectName, .order__card-BTN').css('color', webapp.MainButton.textColor);


$('.order__card-BTN').on('click', function(){
	if($(this).text() == '-'){
		var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
		if(productValue__temp > 1)
			$(this).parent().children('.order__card-input.additBtn').val(productValue__temp-1);
		else{
			$(this).parent().children().removeClass('small').addClass('hiden');
			$(this).removeClass('hiden');
			$(this).text('Добавить').css('background-color', webapp.MainButton.color);
			$(this).parent().children('.order__card-input.additBtn').val(1);
		}
	}else if($(this).text() == '+'){
		var productValue__temp = Number($(this).parent().children('.order__card-input.additBtn').val());
		$(this).parent().children('.order__card-input.additBtn').val(productValue__temp+1);
	}else{
		$(this).parent().children().addClass('small').removeClass('hiden');
		$(this).text('-').css('background-color', '#FA5050');
		$(this).parent().children('.order__card-input.additBtn').val(1);
	}
})