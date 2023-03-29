
var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0 ,
 	soLuongSlide = slides.length,
 	trangThai = 'dangDungYen'	;
 	 		


// 1. xac dinh slide hien tai va slide tiep theo khi click nut next

// goi su kien click vao nut phai
var chuyenSlideChoNutPhai = function(){
	// kiem tra luon trang thai, neu dang chuyen dong  
	if(trangThai == 'dangChuyenDong') { return false ;	}

	// den dong nay tuc la dang dung yen, xu ly chuyen don g
	// danh dau la dang chuyen dong 
	trangThai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0 ; 
	var phanTuHienTai = slides[chiSoHienTai] ;
	// xac dinh chi so cua phan Tu Tiep theo dua tren phan tu hien tai 
	if(chiSoHienTai < soLuongSlide - 1){ // chua den cuoi 
		chiSoHienTai = chiSoHienTai + 1 ; 
	}else { // la phan tu cuoi cung roi 
		chiSoHienTai = 0 ; 
	}
	var phanTuTiepTheo = slides[chiSoHienTai];
	// check chuyen dong ket thuc 
	var xuLyHienTaiKetThucCD = function(){
		console.log(" slide hien tai da xong roi do ");	
		this.classList.remove('dangxem')		;
		this.classList.remove('bienMatKhiAnNext')		;
		trangThaiCua2ChuyenDong++ ; // = 1 
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen' ;}
	} 
	var xuLyTiepTheoKetThucCD = function(){
		console.log(" slide Tiep theo da xong roi do ");	
		this.classList.remove('diVaoKhiAnNext')		;
		this.classList.add('dangxem')		;
		trangThaiCua2ChuyenDong++;  // = 2
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen' ;}
	}


	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD) ;
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD) ;




	// tao chuyen dong sau khi xac dinh dc 2 phan tu 
	phanTuHienTai.classList.add('bienMatKhiAnNext');
	phanTuTiepTheo.classList.add('diVaoKhiAnNext');


};
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
