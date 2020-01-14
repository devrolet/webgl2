'use strict'

function init() {
  const canvas = document.getElementById('webgl-canvas');

  // Ensure we have a canvas
  if (!canvas) {
    console.log('Sorry! No HTML Canvas was found on the page');
    return;
  }

  const gl = canvas.getContext('webgl2');

  // Ensure we have a context
  const message = gl 
    ? 'Hooray! You got a WebGL2 context'
    : 'Sorry! WebGL is not available';
  
  alert(message);
}

// Call init once the document has loaded
window.onload = init;