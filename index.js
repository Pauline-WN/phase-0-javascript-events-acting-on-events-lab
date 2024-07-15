// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (isNaN(left)) {
    left = 0; // Default to 0 if left is NaN (not set)
  }

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (isNaN(left)) {
    left = 0; // Default to 0 if left is NaN (not set)
  }

  const gameWidth = 400; // Assuming game width is 400px
  const dodgerWidth = 40; // Assuming dodger width is 40px
  if (left < gameWidth - dodgerWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
