document.addEventListener('DOMContentLoaded', function () {
  //bien su dung de.click
  let nut = document.getElementsByClassName('declick');
  let contentShow = document.getElementsByClassName('dehienthi');

  for (let i = 0; i < nut.length; i++) {
    nut[i].onclick = function () {
      console.log(this.classList[1]);
      if (this.classList[1] == 'mautrang') {
        this.classList.remove('mautrang');

        let ndhienra = this.getAttribute('data-hienlen');
        let elementShow = document.getElementById(ndhienra);

        elementShow.classList.remove('ra');

      } else {
        for (let k = 0; k < nut.length; k++) {
          nut[k].classList.remove('mautrang');
        }

        this.classList.toggle('mautrang');

        // show menju dropdown
        let ndhienra = this.getAttribute('data-hienlen');
        let elementShow = document.getElementById(ndhienra);
        for (let l = 0; l < contentShow.length; l++) {
          contentShow[l].classList.remove('ra');

        }
        elementShow.classList.toggle('ra');

      }


    }
  }
}, false);
