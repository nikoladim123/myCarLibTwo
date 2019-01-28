var img = document.getElementsByClassName('img')[0];
var smallImg = document.getElementsByClassName('smallImg');

img.onmousemove = function(e) {
    var xCoor = e.clientX;
    var yCoor = e.clientY;
    img.style.backgroundPosition = -xCoor + 'px ' + -yCoor + 'px';
}
img.onmouseleave = function(){
  img.style.backgroundPosition = '0 0';
}


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
