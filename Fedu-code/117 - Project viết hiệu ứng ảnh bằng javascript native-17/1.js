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
nphai.addEventListener('click',function(){
	console.log(" so luong anh la " + khoiCacAnhLis.length);	
	// xac dinh phan tu tiep theo 
	var thuTuCuaPhanTuTiepTheo = 0 , soLuongAnh = khoiCacAnhLis.length; 
	// if(thuTuCuaActive < (soLuongAnh -1)){
	// 	// chua den cuoi 
	// 	thuTuCuaPhanTuTiepTheo =  ; 
	// }
	// else {
	// 	thuTuCuaPhanTuTiepTheo = 0; 
	// }
	thuTuCuaPhanTuTiepTheo = (thuTuCuaActive < (soLuongAnh -1)) ? (thuTuCuaActive + 1) : 0 ; 


	console.log("chi so cua phan tu  dang duoc hien thi la " + thuTuCuaActive);			
	console.log("chi so cua phan tu  dang Tiep theo la " + thuTuCuaPhanTuTiepTheo);			
})


