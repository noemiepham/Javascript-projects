﻿document.addEventListener("DOMContentLoaded",function(){
	// khai bao mot so doi tuong can su dung
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');

	 // nut tra ve mot mang nut 

	 // bat su kien click cho tung nut
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click',function(){
			// bo tat ca mau den di 
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			// het phan xử ly chuyển màu của nút slide
			// xu ly phan tinh vi tri 
			//console.log(this.previousElementSibling);
			var nutkichhoat = this ; 
			var vitrinut = 0 ; 
			for (vitrinut = 0;nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {	}
			// het vong lap nay thi bien i = so thu tu
			//console.log(" vi tri cua phan thu co class la kich hoat la = " + vitrinut );			 		
			// buoc 1 : cho tat ca slide an di = cach remove class active
			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
				slides[vitrinut].classList.add('active');
			}
		 	
		})
	}
	


})
 