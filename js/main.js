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
$('body').append(`<a href="https://clicker.joincommunity.xyz/clicker#${location.href.split('#')[1]}">mobile test</a>`);
$('body').append('<a href="https://clicker.joincommunity.xyz/clicker#tgWebAppData=query_id%3DAAHD6TAeAAAAAMPpMB5Y0ae4%26user%3D%257B%2522id%2522%253A506522051%252C%2522first_name%2522%253A%2522Timur%2522%252C%2522last_name%2522%253A%2522Mukhamedshin%2522%252C%2522username%2522%253A%2522famoustimur%2522%252C%2522language_code%2522%253A%2522ru%2522%252C%2522is_premium%2522%253Atrue%252C%2522allows_write_to_pm%2522%253Atrue%257D%26auth_date%3D1711212893%26hash%3D28b6f14fac63a1bc5b4b4f22cfc71723ab14af93073003afc88dac8cfbeb1ea1&tgWebAppVersion=7.0&tgWebAppPlatform=android&tgWebAppThemeParams=%7B%22bg_color%22%3A%22%23232e39%22%2C%22section_bg_color%22%3A%22%231f2831%22%2C%22secondary_bg_color%22%3A%22%23161f25%22%2C%22text_color%22%3A%22%23ffffff%22%2C%22hint_color%22%3A%22%237f8c97%22%2C%22link_color%22%3A%22%236ab0d7%22%2C%22button_color%22%3A%22%2360b0e1%22%2C%22button_text_color%22%3A%22%23ffffff%22%2C%22header_bg_color%22%3A%22%23262e37%22%2C%22accent_text_color%22%3A%22%2371bbe4%22%2C%22section_header_text_color%22%3A%22%2384c9f1%22%2C%22subtitle_text_color%22%3A%22%237d888e%22%2C%22destructive_text_color%22%3A%22%23ee686f%22%7D">desktop/browser test</a>')

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
