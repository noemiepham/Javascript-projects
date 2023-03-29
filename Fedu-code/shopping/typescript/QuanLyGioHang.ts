import { SanPham} from './sanpham'
import { SanPhamGioHang} from './sanphamgiohang'



export class QuanLyGioHang  {
	private CacSanPhamTrongGioHang : SanPhamGioHang[] = [] ; 

	public xemgiohang():SanPhamGioHang[] {
		return this.CacSanPhamTrongGioHang; 
	}

	public tangsoluongsanpham(motsanpham:SanPham) : void {
		// biet duoc motsanpham vi tri cua no dau trong mang san pham
		var chiso:number = this.checksptruockhithem(motsanpham);
		var soluonghientai = this.CacSanPhamTrongGioHang[chiso].laysoluong() ;
		soluonghientai = soluonghientai + 1; 
		this.CacSanPhamTrongGioHang[chiso].thaydoisoluong(soluonghientai);
	}
	public addSanPhamTrongGioHang(motsanpham:SanPhamGioHang) : void {	
		this.CacSanPhamTrongGioHang.push(motsanpham)		;
				
	}

	public checksptruockhithem(motsanpham:SanPham):number{
		for (var i:number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
			if(this.CacSanPhamTrongGioHang[i].laySanpham().id == motsanpham.id){
				// co san pham nay trong gio hang roi 
				return i ; 
			}			
		}
		return -1 ; 
	}
	public updateSanPham(motsanpham:SanPham,soluong:number) :void {

		// duyet mang 
		for (var i:number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
			var idphantu :number = this.CacSanPhamTrongGioHang[i].laySanpham().id; 
			if(idphantu == motsanpham.id){
				this.CacSanPhamTrongGioHang[i].thaydoisoluong(soluong); 				 
			}
		}

	}
	public kiemTraThaiSanPham():void {}
	public tinhSoLuong() : number {
		var soluong:number = 0 ; 
		// duyet tat ca san pham trong mang, xem so luong, cong don lai 
		for (var i:number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
			soluong += this.CacSanPhamTrongGioHang[i].laysoluong(); 
		}
		// het for, duyet het cac san pham, so luong = tong so san pham
		return soluong;
	};
	public tinhGia():number {
		var congdon:number = 0 ; 
		for (var i:number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
			var gia:number  = this.CacSanPhamTrongGioHang[i].laySanpham().gia;
			var soluong:number  = this.CacSanPhamTrongGioHang[i].laysoluong(); 
			gia = gia*soluong ; 
			congdon += gia ; 

		}
	 		
		return congdon ; 
	}
	public hienThiGioHang():string {
		var giohangHTML:string  = "" ; 
		for (var i:number = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
			//giohangHTML += this.CacSanPhamTrongGioHang[i].laySanpham().ten ; 
			giohangHTML += `
<div class="row motsanpham card-block  ">
	<div class="col-sm-2">
		<img src="${this.CacSanPhamTrongGioHang[i].laySanpham().anh}" alt="" class="img-fluid">
	</div>
	<div class="col-sm-4">
		<a href="" class="tieude"> ${this.CacSanPhamTrongGioHang[i].laySanpham().ten}</a>
		<div class="noidungsp">
			${this.CacSanPhamTrongGioHang[i].laySanpham().mota}
		</div>
	</div>
	<div class="col-sm-2">
		<div class="gia1">${this.CacSanPhamTrongGioHang[i].laySanpham().gia} ₫</div>
		<div class="badge badge-warning">-12%</div>
	</div>
	<div class="col-sm-2">
		 
			<input type="number" data-idsanpham="${this.CacSanPhamTrongGioHang[i].laySanpham().id}" class="soluongsp" value="${this.CacSanPhamTrongGioHang[i].laysoluong()}" min="1">
		 
	</div>
	<div class="col-sm-2">
		<div class="btn-group">
			 
			<div class="btn btn-outline-danger xoasp"> Delete</div>
		</div>
	</div>
</div>
			` ; 


		}
		return giohangHTML; 
	}

	constructor() {
		// code...
	}
}