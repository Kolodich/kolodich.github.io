var elems = document.querySelectorAll(".slider-title__item");
var contnt = document.getElementsByClassName("slider-content__item");

// var content_active = -document.querySelectorAll(".slider-content__item.active");

Array.prototype.forEach.call(elems, function(val, i){ 
		val.onclick = function(){
			if(val.className === "slider-title__item"){
				// Переключение активного контента слайдера

				document.querySelector(".slider-content__item.active").classList.remove("active");
				contnt[i].classList.add("active");
				console.log("contnt.classList = "+ contnt[i].classList);

				// Переключение активного заголовка слайдера
				document.querySelector(".slider-title__item.active").classList.remove("active");
				val.classList.add("active");
			}
	}
});