// cach truy xuat den mot phan tu va thay doi gia tri cua phan tu trong jv
var x1 = document.getElementsByTagName('h1');
console.log(x1);

var x2 = document.getElementsByTagName('h2');
console.log(x2[0]);

var p1 = document.getElementsByTagName('p');
console.log(p1[1].innerHTML);
p1[1].innerHTML = "web da bi hack"


// function in frond-end:
// document.getElementsByTagName('h1')
// tenphantu.innerHTML = "noi dung moi"