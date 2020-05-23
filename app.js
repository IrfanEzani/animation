const container = document.querySelector('.container')
const circleArray = []
let rows = 15;
let cols = 15;


//loop through all circles
for (let i = 0; i < rows; i++) {
  circleArray[i] = [];
  for (let j = 0; j < cols; j++) {
    const circle = document.createElement('div');  //create div
    circle.classList.add('circle'); //add circle class
    container.appendChild(circle);
    circleArray[i].push(circle);
  }
}

circleArray.forEach((rows, i) => {
  rows.forEach((circle, j) => {
    circle.addEventListener('click', () => {
      waves(i,j)
    })
  });
})

function waves(i,j) {
  if (circleArray[i] && circleArray[i][j]) {
    if (!circleArray[i][j].classList.contains('grow')) {
      circleArray[i][j].classList.add('grow')

      setTimeout(() => {
        waves(i+1, j)
        waves(i-1, j)
        waves(i, j+1)
        waves(i, j-1)
      }, 100)

      setTimeout(() => {
        circleArray[i][j].classList.remove('grow')
      }, 300)
    }
  }
}
