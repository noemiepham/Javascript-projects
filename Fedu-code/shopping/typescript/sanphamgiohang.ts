import { SanPham} from './sanpham'

export class SanPhamGioHang  {
	private sanpham : SanPham; 
	private soluong : number; 

	constructor(sanpham:SanPham, soluong:number  = 1) {
		this.sanpham = sanpham; 
		this.soluong = soluong; 
	}
	tinhGiaTien() : number {
		return ; 
	}
	showSanPhamTrongGioHang() : string{
		return ; 
	}
	public laySanpham():SanPham {
		return this.sanpham; 
	}
	public thaydoisoluong(soluong:number):void {
		this.soluong = soluong ; 
	}
	public laysoluong() :number {
		return this.soluong ; 
	}
}