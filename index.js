/* jshint esversion: 6 */
/* jshint esversion: 8 */

const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch error here
    console.log('Whoops, error here:', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
