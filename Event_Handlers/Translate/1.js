// Truy xuat den phan tu 
/* 
 step1: document ready
 */

 document.addEventListener("DOMContentLoaded", function(){
     // dung code 
     var nut = document.getElementById('n1');
     var khoi = document.getElementsByClassName('card');
     console.log(khoi[0]);

     // goi su kien click
     nut.onclick = function() {
          console.log('click duoc chua');
          khoi[0].classList.toggle('movetoright');
     }
 }, false)