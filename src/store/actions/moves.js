export const SELECT_CELL = 'SELECT_CELL';
export const SET_WINNER = 'SET_WINNER';

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  }
}
export function setWinner(winner) {
  return {
    type: SET_WINNER,
    winner
  };
}
