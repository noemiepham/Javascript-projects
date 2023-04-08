let min = null; 
let max = null;

let value = '';
let l = 0;
while ( value != null) {
     value = prompt(" cancel to stop");
     if (value != null){
          if(min == null) {
               min = value;
               max = value;
          }else {
               if (min>value) {
                    min = value;
               }else if (max < value) {
                    max = value;
               }
          }
     }
}
document.getElementById('bigNumber').innerHTML = min;
document.getElementById('bigNumber').innerHTML = max;
function run() {
     let htmlObject = document.getElementById('bigNumber');
     htmlObject.innerHTML = htmlObject.innerHTML + "<p>Hello this is new palise</p>"
}
run();