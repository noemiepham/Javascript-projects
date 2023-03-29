console.log(' chay chua cac ban');
var anhs = document.querySelectorAll('.cacAnh img');

for (var i = 0; i < anhs.length; i++) {
	anhs[i].addEventListener('click',function(){
		console.log('ban vua click vao anh');	
		console.log(this);					
	})
}		