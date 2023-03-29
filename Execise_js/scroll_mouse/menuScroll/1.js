 document.addEventListener('DOMContentLoaded', function(){
     let status =  true;
     let menuObject = document.querySelector('.menu');

     window.addEventListener('scroll', function(){
          if (window.pageYOffset > 300){
               console.log('tren 300');
               
               if(status == true){
                    menuObject.classList.add('SmallMenu')
                    status = false;
               } 
          } else if (window.pageYOffset <= 300){
               console.log('duoi 300');
               
               menuObject.classList.remove('SmallMenu')
               status = true;
          }
     })
 }, false);
 