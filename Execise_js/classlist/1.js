 /* 3 fnction class:
classList.remove(tenclass)

classList.add(tenclass)

classList.toggle(tenclass) (add va remove class)

classList.remove() ( bo tat ca cac class)
*/
 var x1 = document.querySelectorAll('.n1');
 console.log(x1);
 
 x1[0].classList.remove('btn-outline-danger');
 x1[0].classList.remove('btn');
 x1[0].classList.add('btn-block');
 x1[0].classList.add('btn-warning');


 var x2 = document.querySelectorAll('.n3');
 x2[0].classList.toggle('btn-block');
 x2[0].classList.toggle('btn');

 

 