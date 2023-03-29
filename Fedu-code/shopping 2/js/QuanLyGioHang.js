"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuanLyGioHang = (function () {
    function QuanLyGioHang() {
        this.CacSanPhamTrongGioHang = [];
        // code...
    }
    QuanLyGioHang.prototype.xemgiohang = function () {
        return this.CacSanPhamTrongGioHang;
    };
    QuanLyGioHang.prototype.tangsoluongsanpham = function (motsanpham) {
        // biet duoc motsanpham vi tri cua no dau trong mang san pham
        var chiso = this.checksptruockhithem(motsanpham);
        var soluonghientai = this.CacSanPhamTrongGioHang[chiso].laysoluong();
        soluonghientai = soluonghientai + 1;
        this.CacSanPhamTrongGioHang[chiso].thaydoisoluong(soluonghientai);
    };
    QuanLyGioHang.prototype.addSanPhamTrongGioHang = function (motsanpham) {
        this.CacSanPhamTrongGioHang.push(motsanpham);
    };
    QuanLyGioHang.prototype.checksptruockhithem = function (motsanpham) {
        for (var i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            if (this.CacSanPhamTrongGioHang[i].laySanpham().id == motsanpham.id) {
                // co san pham nay trong gio hang roi 
                return i;
            }
        }
        return -1;
    };
    QuanLyGioHang.prototype.updateSanPham = function (motsanpham, soluong) {
        // duyet mang 
        for (var i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            var idphantu = this.CacSanPhamTrongGioHang[i].laySanpham().id;
            if (idphantu == motsanpham.id) {
                this.CacSanPhamTrongGioHang[i].thaydoisoluong(soluong);
            }
        }
    };
    QuanLyGioHang.prototype.kiemTraThaiSanPham = function () { };
    QuanLyGioHang.prototype.tinhSoLuong = function () {
        var soluong = 0;
        // duyet tat ca san pham trong mang, xem so luong, cong don lai 
        for (var i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            soluong += this.CacSanPhamTrongGioHang[i].laysoluong();
        }
        // het for, duyet het cac san pham, so luong = tong so san pham
        return soluong;
    };
    ;
    QuanLyGioHang.prototype.tinhGia = function () {
        var congdon = 0;
        for (var i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            var gia = this.CacSanPhamTrongGioHang[i].laySanpham().gia;
            var soluong = this.CacSanPhamTrongGioHang[i].laysoluong();
            gia = gia * soluong;
            congdon += gia;
        }
        return congdon;
    };
    QuanLyGioHang.prototype.hienThiGioHang = function () {
        var giohangHTML = "";
        for (var i = 0; i < this.CacSanPhamTrongGioHang.length; ++i) {
            //giohangHTML += this.CacSanPhamTrongGioHang[i].laySanpham().ten ; 
            giohangHTML += "\n<div class=\"row motsanpham card-block  \">\n\t<div class=\"col-sm-2\">\n\t\t<img src=\"" + this.CacSanPhamTrongGioHang[i].laySanpham().anh + "\" alt=\"\" class=\"img-fluid\">\n\t</div>\n\t<div class=\"col-sm-4\">\n\t\t<a href=\"\" class=\"tieude\"> " + this.CacSanPhamTrongGioHang[i].laySanpham().ten + "</a>\n\t\t<div class=\"noidungsp\">\n\t\t\t" + this.CacSanPhamTrongGioHang[i].laySanpham().mota + "\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-2\">\n\t\t<div class=\"gia1\">" + this.CacSanPhamTrongGioHang[i].laySanpham().gia + " \u20AB</div>\n\t\t<div class=\"badge badge-warning\">-12%</div>\n\t</div>\n\t<div class=\"col-sm-2\">\n\t\t \n\t\t\t<input type=\"number\" data-idsanpham=\"" + this.CacSanPhamTrongGioHang[i].laySanpham().id + "\" class=\"soluongsp\" value=\"" + this.CacSanPhamTrongGioHang[i].laysoluong() + "\" min=\"1\">\n\t\t \n\t</div>\n\t<div class=\"col-sm-2\">\n\t\t<div class=\"btn-group\">\n\t\t\t \n\t\t\t<div class=\"btn btn-outline-danger xoasp\"> Delete</div>\n\t\t</div>\n\t</div>\n</div>\n\t\t\t";
        }
        return giohangHTML;
    };
    return QuanLyGioHang;
}());
exports.QuanLyGioHang = QuanLyGioHang;
