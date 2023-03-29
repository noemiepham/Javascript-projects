
var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0 ,
 	soLuongSlide = slides.length	;
 	 		


// 1. xac dinh slide hien tai va slide tiep theo khi click nut next

// goi su kien click vao nut phai
var chuyenSlideChoNutPhai = function(){
	console.log('click duoc chua');	
	var phanTuHienTai = slides[chiSoHienTai] ;
	// xac dinh chi so cua phan Tu Tiep theo dua tren phan tu hien tai 
	if(chiSoHienTai < soLuongSlide - 1){ // chua den cuoi 
		chiSoHienTai = chiSoHienTai + 1 ; 
	}else { // la phan tu cuoi cung roi 
		chiSoHienTai = 0 ; 
	}
	var phanTuTiepTheo = slides[chiSoHienTai];
	
	// tao chuyen dong sau khi xac dinh dc 2 phan tu 
	phanTuHienTai.classList.add('bienMatKhiAnNext');
	phanTuTiepTheo.classList.add('diVaoKhiAnNext');


};
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
