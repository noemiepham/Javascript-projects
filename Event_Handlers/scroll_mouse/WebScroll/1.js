document.addEventListener('DOMContentLoaded', function(){
     let status = true;
     let menu = document.querySelector('.menu');
     
     window.addEventListener('scroll', function () {
          if (window.pageYOffset > 100){
               if( status == true) {
                    menu.classList.add('menuBlack')
                    status = false;
               }
          } else if (window.pageYOffset <= 100){
               menu.classList.remove('menuBlack')
                    status = true;
          }
     })
}, false);
