# Syft Tic-Tac-Toe

## Tasks

### Create Tic-Tac-Toe Board

* In `src/components/board` we provide a base component to be modified to render out a Tic-Tac-Toe board.
* The board data is available from the `board` variable, with the current player available in `game.currentPlayer`.
* Selecting a cell can be achieved by dispatching the `selectCell` action with the current player and the cell co-ordinates to select.

Your task is to create a board grid containing the values of the board, and to hook up the dispatch action to allow the selection of each blank cell in the grid.

### Create a win condition

* In `src/store` we provide support for `redux-thunk`, `redux-saga` and `redux-observable`. You must use one of these to implement a win condition with.
* A player wins by selecting 3 uninterrupted cells in a row, column or diagonal.
* The winning player should be populated inside `state.game.winner`.

Your task is to create a win condition handler that checks on each move whether a player has won. If a player wins, display a win message with the winning player.

## Limitations

* Please utilise only `redux-thunk`, `redux-saga` or `redux-observable` for handling side effects.
* Make your changes within this codebase, we'd like to see how you interact with legacy code.
* UI can be implemented using a library or plain CSS, however you feel most comfortable.
* Feel free to use any helpers or utility libraries you need.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
