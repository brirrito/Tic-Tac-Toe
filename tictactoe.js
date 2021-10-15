const boxes = Array.from(document.getElementsByClassName('box'));

const drawBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = '';
    if (index < 3) {
      styleString += `border-bottom: 7px solid #fee440;`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 7px solid #fee440;`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 7px solid #fee440;`;
    }
    if (index > 5) {
      styleString += `border-top: 7px solid #fee440;`;
    }
    box.style = styleString;
  })
}

drawBoard();

fee440