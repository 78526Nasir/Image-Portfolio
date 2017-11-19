
$(function () {

	var currentLi;

	function setImage(src,id){
		$("#main").attr("src",src);

		var path="description/"+id+".txt";

		// AJAX
		$.get(path, function(data){
			$("#description p").html(data);
		});
	}

	$(".portfolio img").click(function(){
		var imgSrc = $(this).attr("src");
		var imgId = $(this).attr("id");
		currentLi = $(this).parent();

		// $("#main").attr("src",imgSrc);
		setImage(imgSrc,imgId);

		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});

	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();
	});

	$("#rightArrow").click(function (){
		if(currentLi.is(":last-child")){
			nextLi = $(".portfolio li").first();
		}else{
			var nextLi = currentLi.next();	
		}

		var nextImgSrc = nextLi.children("img").attr("src");
		var nextImgId = nextLi.children("img").attr("id");
		
		// $("#main").attr("src",nextImgSrc);
		setImage(nextImgSrc, nextImgId);

		currentLi = nextLi; 
	});

	$("#leftArrow").click(function(){
		if(currentLi.is(":first-child")){
			prevLi = $(".portfolio li").last();
		}else{
			var prevLi = currentLi.prev();
		}

		var prevImgSrc = prevLi.children("img").attr("src");
		var prevImgId = prevLi.children("img").attr("id");
		
		// $("#main").attr("src",prevImgSrc);
		setImage(prevImgSrc,prevImgId);

		currentLi = prevLi;
	});
});