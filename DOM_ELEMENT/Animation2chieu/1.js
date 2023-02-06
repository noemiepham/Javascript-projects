document.addEventListener("DOMContentLoaded", function(){
     var nut = document.getElementById('button-click');
     var khoi = document.getElementById('kcd');
     //console.log(nut);
     var status = 'on'
     nut.onclick = function() {
          if (status == 'on')
          {
               console.log('one time click');
               status = 'off';
               khoi.classList.add("chieuso1");
               //console.log(khoi);
               
          } else {
               console.log('two time click');
               status = 'on';
               khoi.classList.add("returnway");
          }
          
     }
 }, false);
 
 