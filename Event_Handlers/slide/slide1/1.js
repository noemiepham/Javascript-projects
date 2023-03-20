 document.addEventListener('DOMContentLoaded', function(){
     let dot = document.querySelectorAll('.chuyenslide ul li');
     // dot return is array
     for (let index = 0; index < dot.length; index++) {
               dot[index].addEventListener('click', function () {
                    // bo tat cac cac phan tu mau den
                    for (let i = 0; i < dot.length; i++) {
                         dot[i].classList.remove('kichhoat')
                         console.log('hello');
                                               
                    }
                    this.classList.add('kichhoat')
                    console.log(this);
               })
     }


     /* chuyen slide */
     /* tinh vi tri cua object */
    previousSibling: tra ve phan tu truoc no 

 }, false);
  
 