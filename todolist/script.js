
function addTask(){
    let list = document.getElementById('enterTask').value;
    let value = document.querySelector('.entertask  table tbody');
    let btn = document.querySelectorAll('.entertask input');
   let m = 0;
    for (m = 0; m < btn.length + 1; m++) {
    } 

    let listLi = `<tr>
    <td>${m}. </td>
    <td>${list}</td>
    <td>
        <input type="button" value="Delete"/>
    </td>
    </tr>`
    //console.log(value);
    
    value.innerHTML = value.innerHTML + listLi;
 
    // value.innerHTML = value.innerHTML + listLi;
    //console.log(btn);
}

/* window.onload = function() {
    let delTask = document.querySelectorAll('.taskList');
    console.log(delTask);
    console.log("click");
    for (let k = 0; k < btn.length; k++) {
    btn[k].addEventListener('click', function(){
        let father =  this.parentElement.parentElement;
        father.remove();
    })
    } 

} */

document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementsByClassName('input');
    console.log(btn);
    
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            let pr = this.parentElement.parentElement;
            pr.remove();
        })
        
    }
}, false);




