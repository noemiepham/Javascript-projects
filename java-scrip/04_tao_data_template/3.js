// Creat database ou base de donner

var array = [
     {
          id: 1,
          photo: "https://images.unsplash.com/photo-1667143296510-6b35a8a356d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          name_photo: "Desert",
          auditeur :'Noemie',
          comment_facebook: 'Xin chao day la hnh toi chup luc toi di choi '
     },
     {
          id: 2,
          photo: "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          name_photo: "house",
          auditeur :'yugi',
          comment_facebook: 'day la hinh ra dep khi toi di choi voi ban '
     },
     {
          id: 3,
          photo: "https://images.unsplash.com/photo-1667143297634-31c6c5f70381?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          name_photo: "house",
          auditeur :'duyanh',
          comment_facebook: 'day la hinh ra dep khi toi di choi voi ban '
     }
]
for (var i = 0; i <array.length; i++) {
     //console.log(array[i].name_photo)
     // su dung template string de xay dung model
     var contenOfDiv = `
                         <div class="kcm" id="kcm-${array[i].id}">
                              <img src="${array[i].photo}" alt="" class="float-xs-left pr-1">
                              <b>${array[i].auditeur}</b>
                              <span>${array[i].comment_facebook}</span>
                         <div>`;
     // tao element moi
     var new_element = document.createElement('div');
     var new_h = document.createElement('h1');
     // day noi dung vao div

     new_element.innerHTML = contenOfDiv;
     new_h.innerHTML = " comment facebook";
     // lay vi tri can dinh vao 
     
     var newdiv = document.getElementById('caccm');
     var newh = document.getElementById('caccm');

     // dinh vao newdiv

     newdiv.appendChild(new_element);
     newh.appendChild(new_h);

     //console.log(contenOfDiv)
}