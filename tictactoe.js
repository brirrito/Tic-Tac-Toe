const boxes = Array.from(document.getElementsByClassName('box'));

const Gameboard = (() => {
  let gameboard = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']]

const getGameboard = () => {
  return gameboard;
}
}) 