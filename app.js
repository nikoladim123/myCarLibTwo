var img = document.getElementsByClassName('img')[0];
var smallImg = document.getElementsByClassName('smallImg');

for (var i = 0; i < smallImg.length ; i++) {
  smallImg[i].addEventListener('click',function(e){
    img.style.opacity = '0';
    setTimeout(function(){
      img.style.backgroundImage = window.getComputedStyle(e.target).backgroundImage;
      setTimeout(function(){
        img.style.opacity = '1';
      },150)
    },400)
  })
}



console.log(window.getComputedStyle(img).backgroundImage);
