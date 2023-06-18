import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

console.dir(iframe);
console.dir(player);

player.on('timeupdate', function (data) {
  saveCurrentTime(data.seconds);
});
console.log(player);

window.addEventListener('beforeunload', function () {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem('videoplayer-current-time', throttle(time, 1000));
  });
});

window.addEventListener('load', function () {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
