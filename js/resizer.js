var resize = function() {
  var w = window.innerWidth;
  var mobile = w <= 1000;
  if(!mobile) {
    document.getElementById('content').style.width = '70%';
    document.getElementById('content').style.marginLeft = '15%';
    document.getElementById('title').style.width = '50%';
    document.getElementById('title').style.marginLeft = '25%';
    document.getElementById('footer').style.width = '50%';
    document.getElementById('footer').style.marginLeft = '25%';
    return;
  }
  document.body.style.fontSize = '22pt';
  document.getElementById('header').style.borderBottom = '3px solid';
  document.getElementById('content').style.width = '92%';
  document.getElementById('content').style.marginLeft = '4%';
  document.getElementById('title').style.fontSize = '30pt';
  document.getElementById('title').style.width = '92%';
  document.getElementById('title').style.marginLeft = '4%';
  document.getElementById('footer').style.width = '92%';
  document.getElementById('footer').style.marginLeft = '4%';
  var sides = document.getElementsByClassName('side');
  sides[0].style.width = '100%';
  sides[1].parentNode.removeChild(sides[1]);
};