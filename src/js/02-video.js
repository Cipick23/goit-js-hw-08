import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

function updateAndSaveCurrentTime(event) {
  player.getCurrentTime().then(currentTime => {
    const saveCurrentTime = throttle(() => {
      localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000);
    saveCurrentTime();
  });
}

player.on('timeupdate', updateAndSaveCurrentTime);

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    player.setCurrentTime(savedTime).catch(error => {
      console.error('Eroare la setarea timpului player-ului:', error);
    });
  }
});