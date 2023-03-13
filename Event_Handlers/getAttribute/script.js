/*  Cach viet jquery su dung cac tham so truyen vao
de co the ap dung voi cai the HTML khac ma co cung thong so */

/* 
thuoc tinh HTML5: data-content ( luu data trong html)
Lay ve thong qua function getAttribut
 */

document.addEventListener('DOMContentLoaded', function(){
     let nut = document.getElementsByClassName('btn');
     for (let index = 0; index < nut.length; index++) {
          const element = nut[index];
          element.onclick = function(){
               console.log(this.getAttribute('data-infor'));
          }        
     }
}, false);
