var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs ((slideIndex += n));
}

function showDivs(n) {
  var i;
  var imgList = document.getElementsByClassName("img-slideshow");
  if (n > imgList.length) slideIndex = 1;
  else if (n < 1) slideIndex = imgList.length;
  
  for (i= 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  imgList [slideIndex -1].style.display ="block";
}

setInterval(() => {
  plusDivs(1);
}, 3000);


function validateForm() {
    let name = document.forms["myForm"]["fname"].value;
    let email = document.forms["myForm"]["femail"].value;

    if (name == "" || email == "") {
      alert("Tidak boleh ada yang kosong");
      return false;
    }
  }