$(function(){
	
//	顶部菜单
	$("header .menu").hide();
	$("header .shouye").click(function(){
		$("header .menu").slideToggle();
	});
	
	
//	轮播
	var mySwiperone = new Swiper("#swiper-container1",{
		autoplay:2000,
		speed:1000,
		loop:true,
		pagination:'#swiper-pagination1',
		paginationClickable:true
	});
	
	
	
//	<!--		内容区-->
	var two = new Swiper("#swiper-container2",{
		slidesPerView:5,
	});
	two.disableTouchControl();

	$("#swiper-container2 .swiper-wrapper div").click(function(){
		var index = $(this).index();
		tghree.slideTo(index,1000,false);
	});
	
	
	
	$("#swiper-container2 .swiper-wrapper .swiper-slide").click(function(){
		$("#swiper-container2 .swiper-wrapper .swiper-slide").removeClass("active");
		$(this).addClass("active");
		$("#swiper-container2 .back").removeClass("active");
		$(this).find(".back").addClass("active");
	});
	
	
})
