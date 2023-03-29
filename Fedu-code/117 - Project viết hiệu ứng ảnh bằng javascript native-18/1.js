 var anhs = document.querySelectorAll('.cacAnh img'),
	nenDen = document.querySelector('.nenden'),
	dongLai = document.querySelector('.dongLai'),
	thongtinanh = document.querySelector('.thongtinanh'),
	khoiCacAnhLis = document.querySelectorAll('.khoiCacAnh ul li'),
	nphai = document.querySelector('.nphai'),
	thuTuCuaActive = 0 ;


// khi click vao nen den 
nenDen.addEventListener('click',function(){
	nenDen.classList.remove('ra');
	thongtinanh.classList.remove('ra');		
	var anhActive = document.querySelector('.khoiCacAnh ul li.active');
	anhActive.classList.remove('active');
})
  
for (var i = 0; i < anhs.length; i++) {
	anhs[i].addEventListener('click',function(){
		nenDen.classList.add('ra');		
		thongtinanh.classList.add('ra');
		var anhDuocClick = this; 
		for (var chiSo = 0;anhDuocClick = anhDuocClick.previousElementSibling; chiSo++) {}	
		// in ra ra phan tu dc active  
		thuTuCuaActive = chiSo ; 
	 	khoiCacAnhLis[chiSo].classList.add('active');
	})
}
var hienTai2 = thuTuCuaActive ; 	
nphai.addEventListener('click',function(){
	console.log(" so luong anh la " + khoiCacAnhLis.length);	
	var soLuongAnh = khoiCacAnhLis.length; 
	var phanTuHienTai = khoiCacAnhLis[hienTai2];

	hienTai2 = (hienTai2 < (soLuongAnh -1)) ? (hienTai2 + 1) : 0 ; 
	var phanTuTiepTheo  = khoiCacAnhLis[hienTai2];

	phanTuHienTai.classList.remove('active');
	phanTuTiepTheo.classList.add('active');

})


