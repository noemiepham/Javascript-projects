"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SanPhamGioHang = (function () {
    function SanPhamGioHang(sanpham, soluong) {
        if (soluong === void 0) { soluong = 1; }
        this.sanpham = sanpham;
        this.soluong = soluong;
    }
    SanPhamGioHang.prototype.tinhGiaTien = function () {
        return;
    };
    SanPhamGioHang.prototype.showSanPhamTrongGioHang = function () {
        return;
    };
    SanPhamGioHang.prototype.laySanpham = function () {
        return this.sanpham;
    };
    SanPhamGioHang.prototype.thaydoisoluong = function (soluong) {
        this.soluong = soluong;
    };
    SanPhamGioHang.prototype.laysoluong = function () {
        return this.soluong;
    };
    return SanPhamGioHang;
}());
exports.SanPhamGioHang = SanPhamGioHang;
