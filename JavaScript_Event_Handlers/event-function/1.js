 /* Document ready:
 why: De xu ly su kien (click, di chuột,cuộn chuột... )

 thì cần chờ cho nội dung html load xong, sau đó mới bắt đầu load js, nếu không sẽ bị lỗi

 how: documentaddEventListener('DOMContentLoaded'.function(){}.false)

     su kien click tenphantu.onClick = fucntion(){}

*/

/* cho khi nao trang html tai xong, thi thuc hien function */
 document.addEventListener("DOMContentLoaded", function(){
     var x1 = document.getElementById('comment');
     var x2 = document.getElementById('n1');
     var x3 = document.getElementById('n2');
     console.log(x1);
     console.log(x2);
     x2.onclick = function() {
          console.log("ban vua click vao button" + x2);
          x1.classList.add('textbox');
     };
     x3.onclick = function() {
          console.log("ban vua click vao function" + x2);
          x1.classList.remove('textbox');
     };

 },false)