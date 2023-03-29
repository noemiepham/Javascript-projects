import { SanPham } from "./sanpham" ;
import { QuanLyHang } from "./quanlyhang" ;
import { QuanLyGioHang } from "./QuanLyGioHang" ;
import { SanPhamGioHang } from "./sanphamgiohang" ;

var tatcahang = new QuanLyHang(); 
var giohang = new QuanLyGioHang();
var divchuagiohang = document.getElementById('cacsptronggio');
var smallsoluong = document.querySelector('.tdto small');
var giatamtinh = document.getElementById('giatamtinh');
var thanhtien = document.querySelector('.doto');
		
 // day san pham tu "du lieu"  vao giao dien 
var divsanpham = document.getElementById('cacspdemua')	;
divsanpham.innerHTML = tatcahang.showSanPham();	


// xuly su kien click vao nut mua ngay 
var nutmuangays = document.querySelectorAll('.nutmuangay');
for (var i:number = 0; i < nutmuangays.length; ++i) {
	nutmuangays[i].addEventListener('click',function(){
		var idlayduoc:number = this.getAttribute('data-idsp');	
		if(tatcahang.getSanPhamById(idlayduoc) == 0){
			console.log("Lỗi dữ liệu, liên hệ fedu.vn để biết thêm chi tiết");			
		}		
		else {
			var sanphamlayduoc:SanPham = tatcahang.getSanPhamById(idlayduoc);
			// kiem tra xem có sản phẩm này chưa
			if(giohang.checksptruockhithem(sanphamlayduoc) == -1){
				// chua co , them san pham vao voi so luong 1
				var chuyendoisanphamsanggiohang:SanPhamGioHang = new SanPhamGioHang(sanphamlayduoc,1)	;
				giohang.addSanPhamTrongGioHang(chuyendoisanphamsanggiohang);
			}
			else // co roi 
			{
				// update so luong san pham 
				giohang.tangsoluongsanpham(sanphamlayduoc);

				
			}
			divchuagiohang.innerHTML = giohang.hienThiGioHang();
 			indulieu();
 			thongbao('<div class="alert alert-success" role="alert"><div class="fa fa-check-square-o"></div> <strong>  Sản phẩm đã được thêm vào giỏ hàng </div>');

			// test
			var osoluongs = document.getElementsByClassName('soluongsp');
			for (var i:number = 0; i < osoluongs.length; ++i) {
				osoluongs[i].addEventListener('change',function(){
					var idcuasanpham:any  = this.getAttribute('data-idsanpham');
					var sanphamlayduoc:SanPham = tatcahang.getSanPhamById(idcuasanpham);
					//console.log(this.value);	
					//console.log(sanphamlayduoc);
					var soluongupdate:number  = parseInt(this.value); 
					giohang.updateSanPham(sanphamlayduoc,soluongupdate);
					// du lieu da chuan , in ra thoi 

					console.log(giohang.xemgiohang());			
	 				 indulieu();
	 				 thongbao('<div class="alert alert-danger" role="alert"><div class="fa fa-check-square-o"></div> <strong>  Giỏ hàng đã cập nhật ! </div>');
				})
			}
			

		}
		// dua san pham lay duoc vao mang quan ly sp gio hang

	})

}		


function indulieu():void {
		
		// in ra so luong 		 		
		smallsoluong.innerHTML = "(" + giohang.tinhSoLuong() + " sản phẩm )";
		// tinh gia 
		//giohang.tinhGia();
		giatamtinh.innerHTML = giohang.tinhGia() + "  ₫"; 
		thanhtien.innerHTML = giohang.tinhGia() + "  ₫"; 
}

function thongbao(noidung:string) :void {
	var othongbao = document.querySelector('.tb');

	othongbao.innerHTML = noidung ; 
}