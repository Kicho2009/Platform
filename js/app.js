document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const welcomeScreen = document.getElementById('welcome-screen');
  const videoScreen = document.getElementById('video-screen');
  const locationScreen = document.getElementById('location-screen');
  const invitationVideo = document.getElementById('invitation-video');

  startBtn.addEventListener('click', () => {
    // Hide welcome screen
    welcomeScreen.classList.remove('active');
    
    // Show video screen and start playing
    videoScreen.classList.add('active');
    invitationVideo.play().catch(error => {
      console.error("Error attempting to play", error);
    });
  });

  let transitioned = false;
  invitationVideo.addEventListener('timeupdate', () => {
    // Transition instantly at the very end of the video
    if (invitationVideo.duration - invitationVideo.currentTime < 0.1 && !transitioned) {
      transitioned = true;
      videoScreen.classList.remove('active');
      locationScreen.classList.add('active');
    }
  });

  invitationVideo.addEventListener('ended', () => {
    // Fallback just in case
    if (!transitioned) {
      transitioned = true;
      videoScreen.classList.remove('active');
      locationScreen.classList.add('active');
    }
  });
});
