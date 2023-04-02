let voiture = [1,3,4];
//console.log(sumArray(voiture));
function sumArray(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
          sum += arr[i];
     }
     return sum;
     }

     document.getElementById('array').innerHTML = sumArray(voiture)
function whileArray(arr) {
     let sum = 0;
     let i = 0;
     while (i<arr.length) {
          sum += arr[i];
          i++;
     } return sum;     
}
document.getElementById('array2').innerHTML = sumArray(voiture)

function mapArray(arr) {
     let sum = 0;
     mang.map(function (params) {
          sum += params;
     })
     return sum;
}

document.getElementById('array3').innerHTML = sumArray(voiture)
document.getElementById('array4').innerHTML = sumArray(voiture)

function reduceArr(params) {
     let sum = params.reduce(function(sum, currentValue){
          return sum + currentValue;
     })

}