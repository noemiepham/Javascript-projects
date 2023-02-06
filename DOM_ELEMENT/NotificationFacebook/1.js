document.addEventListener('DOMContentLoaded', function(){
     //khai bao bien can su dung trong app nay 
     var tamgiac = document.getElementsByClassName('tamgiac');
     var tamgiac = tamgiac[0];
     var danhsach = document.getElementsByClassName('danhsach');
     // su dung ham onclick va toggle class cho tal gia doi mau 

     tamgiac.onclick = function(){
          this.classList.toggle('tamgiacWhite');        
          danhsach[0].classList.toggle('danhsach2');
     };
}, false);


