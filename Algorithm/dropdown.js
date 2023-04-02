
var menu = document.querySelectorAll('#dropdown > li');
    // console.log(menu);
     
    for (var i = 0; i < menu.length; i++) {
         // console.log('hello');
          
         menu[i].addEventListener("click", function(){
          var menuList = document.querySelectorAll('#dropdown > li > ul');
               //console.log(menuList);
               for (let k = 0; k < menuList.length; k++) {
                    menuList[k].style.display = 'none';
                    
               }
          this.children[1].style.display = "block";
          });
     }
