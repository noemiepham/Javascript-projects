document.addEventListener("DOMContentLoaded",function(){
	
	// khai bao cac bien can dung
	let nut = document.querySelector('.nut');
     let menutrai = document.querySelector('.menutrai');
     let den = document.querySelector('.den');
     let trang = document.querySelector('.mautrang');

	//khi click vao nut xanh 
	nut.onclick = function(){
		den.classList.add('len');
		menutrai.classList.remove('vetrai');
          trang.classList.add('trangquay')


	}
     den.onclick = function(){
          den.classList.remove('len');
          menutrai.classList.add('vetrai');
          trang.classList.remove('trangquay')
     }	

},false)
