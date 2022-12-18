import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const PLAYBACK_TIME = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    localStorage.setItem(PLAYBACK_TIME, seconds);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem(PLAYBACK_TIME) || 0);
