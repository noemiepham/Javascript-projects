 
import { SanPham } from "./sanpham"

export class QuanLyHang {
	private hang : SanPham[] = [];  // dung để hứng dữ liệu từ API

	constructor(){
		// vì ko có phần PHP nên là mình tạo bằng tay
		var sanpham1:SanPham = new SanPham(1,"Ốp Iphone",40000,"Ốp đến từ Nhật Bản Lorem ipsum dolor sit amet, consectetur adipisicing elit.",true,"images/1.jpg")	 ;
		this.addSanPham(sanpham1);

		var sanpham2:SanPham = new SanPham(2,"Ốp Samsung",20000,"Ốp đến từ Han Quoc Lorem ipsum dolor sit amet, consectetur adipisicing elit.",false,"images/2.jpg")	 ;
		this.addSanPham(sanpham2);

		var sanpham3:SanPham = new SanPham(3,"Apple Watch",400000,"Đồng hồ dành cho hệ điều hành ios Lorem ipsum dolor sit amet, consectetur adipisicing elit.",true,"images/3.jpg")	 ;
		this.addSanPham(sanpham3);

var sanpham4:SanPham = new SanPham(4,"Tủ Lạnh",300000,"Tủ lạnh cho hệ điều hành ios Lorem ipsum dolor sit amet, consectetur adipisicing elit.",true,"images/4.jpg")	 ;
		this.addSanPham(sanpham4);


var sanpham5:SanPham = new SanPham(5,"Điện thoại sam sung",12000,"Đồng hồ dành cho hệ điều hành ios Lorem ipsum dolor sit amet, consectetur adipisicing elit.",true,"images/5.jpg")	 ;
		this.addSanPham(sanpham5);



	}
	
	public getSanPhamById(idsanpham:number) : any {
		 var k:number; 
		// lay san pham du vao id 
		for (var i:number = 0; i < this.hang.length; ++i) {
			// kiem tra 
			if(this.hang[i].id == idsanpham){
				return this.hang[i];
			}

		}
		// het vong lap thi ko co san pham trung trong du lieu


		return 0 ; 
	}
	public addSanPham(sp:SanPham) :void{
		// dung để đẩy dữ liệu hứng từ API 
		// vao trong cái mảng hàng //cach 1
		//this.hang.push(sp);  

		//cach 2
		this.hang[this.hang.length] = sp; 		 
 		
	}

	public getCacSanPham() : SanPham[] {
		return this.hang ; 
	}
	public showSanPham() : string {
		// lây sản phẩm in ra dưới dạng HTML và đặt vào giao diện
		var danhsachspHTML = ""; 
		if(this.hang.length != 0 ){ 
			// duyet mangr hang
			for (var i = 0; i < this.hang.length; ++i) {
				 danhsachspHTML += `
 <div class="col-sm-4">
	<div class="card _1spkhac id-${this.hang[i].id}">
		<img class="img-fluid" src="${this.hang[i].anh}">
		<div class="card-block">
			<a href="" class="tdspkhac">${this.hang[i].ten}</a>
			<p class="card-text mota">${this.hang[i].mota}</p>
			<b>${this.hang[i].gia} ₫</b>`;

			if(this.hang[i].tinhtrang == false){
				danhsachspHTML+= `
<a href="#" class="btn btn-outline-secondary disabled btn-block">Hết hàng</a>

				`;
			}
			else {
	danhsachspHTML+= `
<button class="btn btn-outline-info nutmuangay  btn-block" data-idsp="${this.hang[i].id}">Mua hàng</button>

				`;			}
			  
			danhsachspHTML+= `
		</div>
	</div>

</div>
				 `;

			} // het for 
			return danhsachspHTML; 

		 }

		return " Sản phẩm đang đc cập nhật !";
	}

}