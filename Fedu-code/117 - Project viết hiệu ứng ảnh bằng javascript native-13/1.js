console.log(' chay chua cac ban');
var anhs = document.querySelectorAll('.cacAnh img'),
	nenDen = document.querySelector('.nenden'),
	dongLai = document.querySelector('.dongLai'),
	thongtinanh = document.querySelector('.thongtinanh') ;

// khi click vao nut dong
dongLai.addEventListener('click',function(){
	nenDen.classList.remove('ra');		
	thongtinanh.classList.remove('ra');		
})

// khi click vao nen den 
nenDen.addEventListener('click',function(){
	nenDen.classList.remove('ra');
	thongtinanh.classList.remove('ra');		
})


for (var i = 0; i < anhs.length; i++) {
	anhs[i].addEventListener('click',function(){
		nenDen.classList.add('ra');		
		thongtinanh.classList.add('ra');
	})
}		