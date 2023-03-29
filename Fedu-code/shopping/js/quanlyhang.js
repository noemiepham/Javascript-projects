"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sanpham_1 = require("./sanpham");
var QuanLyHang = (function () {
    function QuanLyHang() {
        this.hang = []; // dung để hứng dữ liệu từ API
        // vì ko có phần PHP nên là mình tạo bằng tay
        var sanpham1 = new sanpham_1.SanPham(1, "Ốp Iphone", 40000, "Ốp đến từ Nhật Bản Lorem ipsum dolor sit amet, consectetur adipisicing elit.", true, "images/1.jpg");
        this.addSanPham(sanpham1);
        var sanpham2 = new sanpham_1.SanPham(2, "Ốp Samsung", 20000, "Ốp đến từ Han Quoc Lorem ipsum dolor sit amet, consectetur adipisicing elit.", false, "images/2.jpg");
        this.addSanPham(sanpham2);
        var sanpham3 = new sanpham_1.SanPham(3, "Apple Watch", 400000, "Đồng hồ dành cho hệ điều hành ios Lorem ipsum dolor sit amet, consectetur adipisicing elit.", true, "images/3.jpg");
        this.addSanPham(sanpham3);
        var sanpham4 = new sanpham_1.SanPham(4, "Tủ Lạnh", 300000, "Tủ lạnh cho hệ điều hành ios Lorem ipsum dolor sit amet, consectetur adipisicing elit.", true, "images/4.jpg");
        this.addSanPham(sanpham4);
        var sanpham5 = new sanpham_1.SanPham(5, "Điện thoại sam sung", 12000, "Đồng hồ dành cho hệ điều hành ios Lorem ipsum dolor sit amet, consectetur adipisicing elit.", true, "images/5.jpg");
        this.addSanPham(sanpham5);
    }
    QuanLyHang.prototype.getSanPhamById = function (idsanpham) {
        var k;
        // lay san pham du vao id 
        for (var i = 0; i < this.hang.length; ++i) {
            // kiem tra 
            if (this.hang[i].id == idsanpham) {
                return this.hang[i];
            }
        }
        // het vong lap thi ko co san pham trung trong du lieu
        return 0;
    };
    QuanLyHang.prototype.addSanPham = function (sp) {
        // dung để đẩy dữ liệu hứng từ API 
        // vao trong cái mảng hàng //cach 1
        //this.hang.push(sp);  
        //cach 2
        this.hang[this.hang.length] = sp;
    };
    QuanLyHang.prototype.getCacSanPham = function () {
        return this.hang;
    };
    QuanLyHang.prototype.showSanPham = function () {
        // lây sản phẩm in ra dưới dạng HTML và đặt vào giao diện
        var danhsachspHTML = "";
        if (this.hang.length != 0) {
            // duyet mangr hang
            for (var i = 0; i < this.hang.length; ++i) {
                danhsachspHTML += "\n <div class=\"col-sm-4\">\n\t<div class=\"card _1spkhac id-" + this.hang[i].id + "\">\n\t\t<img class=\"img-fluid\" src=\"" + this.hang[i].anh + "\">\n\t\t<div class=\"card-block\">\n\t\t\t<a href=\"\" class=\"tdspkhac\">" + this.hang[i].ten + "</a>\n\t\t\t<p class=\"card-text mota\">" + this.hang[i].mota + "</p>\n\t\t\t<b>" + this.hang[i].gia + " \u20AB</b>";
                if (this.hang[i].tinhtrang == false) {
                    danhsachspHTML += "\n<a href=\"#\" class=\"btn btn-outline-secondary disabled btn-block\">H\u1EBFt h\u00E0ng</a>\n\n\t\t\t\t";
                }
                else {
                    danhsachspHTML += "\n<button class=\"btn btn-outline-info nutmuangay  btn-block\" data-idsp=\"" + this.hang[i].id + "\">Mua h\u00E0ng</button>\n\n\t\t\t\t";
                }
                danhsachspHTML += "\n\t\t</div>\n\t</div>\n\n</div>\n\t\t\t\t ";
            } // het for 
            return danhsachspHTML;
        }
        return " Sản phẩm đang đc cập nhật !";
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
