//check integer or not  so nguyen duong 
//isInteger

function integer(params) {
     return( Number.isInteger(params) && params > 0);
}

document.getElementById("demo").innerHTML = integer(13.1)

/* function arrow */
let result = (params) => {
     return( Number.isInteger(params) && params > 0);
}

document.getElementById("demo1").innerHTML = result('5')

//check so nguyen am
let a = 1;
let b = 4;

let total = a + b;
document.write("tong hai so la: " + total);

// tinh tong hai so 
sum()

/* ex */
function sum(){
     let a = document.getElementById("num1").value;
     let b = document.getElementById("num2").value;
  
     // Kiểm tra dữ liệu
     if (a == "" || b == ""){
         return false;
     }
  
     // Ép kiểu dữ liệu
     a = Number(a);
     b = Number(b);
  
     if (isNaN(a) || isNaN(b)){
         alert("Bạn phải nhập vào hai số");
         return false;
     }
  
     let sum = parseInt(a) + b;
  
     document.getElementById('result').innerHTML = sum;
 }
