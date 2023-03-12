document.addEventListener("DOMContentLoaded",function(){
	// bien su dung .declick
	var nut = document.getElementsByClassName('declick');
	var nd = document.getElementsByClassName('dehienthi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			for (var k = 0; k < nut.length; k++) {
				nut[k].classList.remove('mautrang');
			}

			this.classList.toggle('mautrang');
			//lay ve cai data-hienlien
			var ndhienra =  this.getAttribute('data-hienlen');
			var phan_tu_hien_ra = document.getElementById(ndhienra);
			for (var i = 0; i < nd.length; i++) {
				nd[i].classList.remove('ra');
			}
			phan_tu_hien_ra.classList.toggle('ra');
			 		
		}
	}
},false)
