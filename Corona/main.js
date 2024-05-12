var gameContainer = document.getElementById('gameContainer');
var airplane = document.getElementById('airplane');


document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {
    case 37: 
      airplane.style.left = (airplane.offsetLeft - 10) + 'px';
      break;
    case 39: 
      airplane.style.left = (airplane.offsetLeft + 10) + 'px';
      break;
    case 32: 
      shootBullet();
      break;
  }
});


function shootBullet() {
  var bullet = document.createElement('div');
  bullet.className = 'bullet';
  bullet.style.left = (airplane.offsetLeft + 22) + 'px';  
  gameContainer.appendChild(bullet);

  var bulletInterval = setInterval(function() {
    bullet.style.top = (bullet.offsetTop - 10) + 'px';
    if (bullet.offsetTop < 0) {
      clearInterval(bulletInterval);
      gameContainer.removeChild(bullet);
    }
  }, 100);
}