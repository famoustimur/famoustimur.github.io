$('.main__rate-star').on('mouseover', function(){
	let starIndex = $('#main-rate-stars').children('.main__rate-star').index(this);
	for (var i = 0; i <= $('.main__rate-star').index(this); i++) {
		$($('#main-rate-stars').children('.main__rate-star')[i]).addClass('active');
	}
})
$('.main__rate-star').on('mouseleave', function(){
	$('.main__rate-star').removeClass('active');
})
$('.main__rate-star').on('click', function(){
	$('.main__rate-star').removeClass('check');
	let starIndex = $('#main-rate-stars').children('.main__rate-star').index(this);
	for (var i = 0; i <= $('.main__rate-star').index(this); i++) {
		$($('#main-rate-stars').children('.main__rate-star')[i]).addClass('check');
	}
})