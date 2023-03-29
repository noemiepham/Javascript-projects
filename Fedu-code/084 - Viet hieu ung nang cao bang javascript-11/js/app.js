
// var x = 9888 ; 
// var ketqua = '';
// // if(x < 1000 )
// // {
// // 	ketqua = " Nho hon 1000";
// // }
// // else 
// // {
// // 	ketqua = " Lon Hon hoac bang 1000" ;
// // }
// ketqua = (x<1000) ? "nho hon 1000" : "Lon hon 1000" ;

 
// if(chiSoHienTai > 0 )	 { 	chiSoHienTai-- ; 	 }	 

// else{ 	chiSoHienTai = soLuongSlide - 1 ;	 }	
// var chiSoHienTai = 0,soLuongSlide=99; 
// chiSoHienTai = (chiSoHienTai > 0) ?  (chiSoHienTai-1)  : (soLuongSlide - 1)  ;
// console.log(chiSoHienTai);			
// if(chiSoHienTai < soLuongSlide - 1){chiSoHienTai++ ; 
// 		} else {  chiSoHienTai = 0 ; }


// chiSoHienTai = (chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai++) : 0; 
// if(nutnao == 'nutTrai')
// 	{
// 		chiSoHienTai = (chiSoHienTai > 0) ?  (chiSoHienTai-1)  : (soLuongSlide - 1)  ;	
// 	}
// 	else  {
// 		chiSoHienTai = (chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai++) : 0;		
// 	}

// chiSoHienTai = (nutnao == 'nutTrai') ? ((chiSoHienTai > 0) ?  (chiSoHienTai-1)  : (soLuongSlide - 1)) : ((chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai++) : 0);


var nutPhai = document.querySelector('.nuts b.phai'),
 	nutTrai = document.querySelector('.nuts b.trai'),
 	slides = document.querySelectorAll('.slides ul li'),
 	chiSoHienTai = 0 ,
 	soLuongSlide = slides.length,
 	trangThai = 'dangDungYen'	;
 	 		

function xacDinh2SlideVaChuyendong(nutnao){
	if(trangThai == 'dangChuyenDong') { return false ;	}
	trangThai = 'dangChuyenDong';
	var trangThaiCua2ChuyenDong = 0 ; 
	var phanTuHienTai = slides[chiSoHienTai] ;

	chiSoHienTai = (nutnao == 'nutTrai') ? ((chiSoHienTai > 0) ?  (chiSoHienTai-1)  : (soLuongSlide - 1)) : ((chiSoHienTai < soLuongSlide - 1) ? (chiSoHienTai++) : 0); 
	var phanTuTiepTheo = slides[chiSoHienTai];
 	var xuLyHienTaiKetThucCD = function(){		 
		this.classList.remove('dangxem');
		if(nutnao == 'nutTrai')
		{
			 this.classList.remove('bienMatKhiAnPrev') ;
		}
		else if(nutnao == 'nutPhai'){
			 this.classList.remove('bienMatKhiAnNext') ;
		}
		
		trangThaiCua2ChuyenDong++ ; 
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen' ;}
	} 
	var xuLyTiepTheoKetThucCD = function(){		
		if(nutnao == 'nutTrai')
		{
			this.classList.remove('diVaoKhiAnPrev') ;
		}
		else if(nutnao == 'nutPhai'){
			this.classList.remove('diVaoKhiAnNext') ;
		}
		
		this.classList.add('dangxem') ;
		trangThaiCua2ChuyenDong++;  
		if(trangThaiCua2ChuyenDong==2){trangThai = 'dangDungYen' ;}
	}
	phanTuTiepTheo.addEventListener("webkitAnimationEnd",xuLyTiepTheoKetThucCD) ;
	phanTuHienTai.addEventListener("webkitAnimationEnd",xuLyHienTaiKetThucCD) ;

	if(nutnao == 'nutTrai')
	{
	 	phanTuHienTai.classList.add('bienMatKhiAnPrev');
		phanTuTiepTheo.classList.add('diVaoKhiAnPrev');
	}
	else if(nutnao == 'nutPhai'){
		phanTuHienTai.classList.add('bienMatKhiAnNext');
		 phanTuTiepTheo.classList.add('diVaoKhiAnNext');
	}
}
var chuyenSlideChoNutPhai = function(){
	xacDinh2SlideVaChuyendong('nutPhai');	 
};
var chuyenSlideChoNutTrai = function(){
	xacDinh2SlideVaChuyendong('nutTrai'); 
}
nutPhai.addEventListener('click',chuyenSlideChoNutPhai);
nutTrai.addEventListener('click',chuyenSlideChoNutTrai);