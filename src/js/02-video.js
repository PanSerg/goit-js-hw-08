import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
    console.log(data);
}
player.on('play', onPlay);


iframe.addEventListener('timeupdate', (evt) => {
    console.log(evt.target);
});

console.log(localStorage);
localStorage.setItem('videoplayer-current-time', 'qweqwe');

player.getCurrentTime(9.32).then(function (seconds) {
    // seconds = the current playback position
  })
  .catch(function (error) {
    // an error occurred
  });

  // player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });



