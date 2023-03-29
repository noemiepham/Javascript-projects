 document.addEventListener('DOMContentLoaded', function(){
     // chi in ra vi tri nguoi dung 1 lan 
     let status = 'duoi300';
     //bat su kien khi nguoi dung scroll
     window.addEventListener('scroll', function(){
     // vi tri cua nguoi dung
     console.log(window.pageYOffset);
     if (window.pageYOffset>300)
     {
          if(status == 'duoi300') {
               console.log('lam gi..?? ');
               status = 'tren300';
          }
     }
     })

}, false);
 