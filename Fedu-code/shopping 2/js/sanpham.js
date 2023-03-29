"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SanPham = (function () {
    function SanPham(id, ten, gia, mota, tinhtrang, anh) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.mota = mota;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }
    Object.defineProperty(SanPham.prototype, "id", {
        //id
        get: function () {
            return this._id;
        },
        set: function (v) {
            this._id = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "ten", {
        //ten
        get: function () {
            return this._ten;
        },
        set: function (v) {
            this._ten = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "gia", {
        //gia
        get: function () {
            return this._gia;
        },
        set: function (v) {
            this._gia = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "mota", {
        //mota
        get: function () {
            return this._mota;
        },
        set: function (v) {
            this._mota = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "tinhtrang", {
        //tinhtrang
        get: function () {
            return this._tinhtrang;
        },
        set: function (v) {
            this._tinhtrang = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SanPham.prototype, "anh", {
        //mota
        get: function () {
            return this._anh;
        },
        set: function (v) {
            this._anh = v;
        },
        enumerable: true,
        configurable: true
    });
    return SanPham;
}());
exports.SanPham = SanPham;
