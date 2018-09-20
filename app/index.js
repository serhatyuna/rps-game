// To use Vue developer tools on Google Chrome
Vue.config.devtools = true;

new Vue({
  el: '#app',
  data: {
    play: false,
    isGameOver: false,
    usersMove: null,
    opponentsMove: null,
    moveWillBeShown: '',
    winner: '',
    isRockSelected: null,
    isPaperSelected: null,
    isScissorsSelected: null,
  },
  methods: {
    makeUsersMove(move) {
      if (this.usersMove === null) {
        if (move === 'rock') {
          this.usersMove = 0;
          this.isRockSelected = true;
          this.isPaperSelected = false;
          this.isScissorsSelected = false;
          this.isGameOver = true;
          this.makeOpponentsMove();
        } else if (move === 'paper') {
          this.usersMove = 1;
          this.isRockSelected = false;
          this.isPaperSelected = true;
          this.isScissorsSelected = false;
          this.isGameOver = true;
          this.makeOpponentsMove();
        } else if (move === 'scissors') {
          this.usersMove = 2;
          this.isRockSelected = false;
          this.isPaperSelected = false;
          this.isScissorsSelected = true;
          this.isGameOver = true;
          this.makeOpponentsMove();
        } else {
          this.play = false;
        }
      }
    },
    makeOpponentsMove() {
      if (this.usersMove !== null) {
        this.opponentsMove = Math.floor(Math.random() * 3);
        if (this.opponentsMove === 0) {
          this.moveWillBeShown = 'rock';
          this.determineTheWinner();
        } else if (this.opponentsMove === 1) {
          this.moveWillBeShown = 'paper';
          this.determineTheWinner();
        } else if (this.opponentsMove === 2) {
          this.moveWillBeShown = 'scissors';
          this.determineTheWinner();
        } else {
          this.play = false;
        }
      }
    },
    determineTheWinner() {
      if (this.opponentsMove !== null && this.usersMove !== null) {
        // Rock - Paper
        if (this.usersMove === 0 && this.opponentsMove === 1) {
          this.winner = 'You Lost!';
          return;
        }

        // Rock - Scissors
        if (this.usersMove === 0 && this.opponentsMove === 2) {
          this.winner = 'You Won!';
          return;
        }

        // Paper - Rock
        if (this.usersMove === 1 && this.opponentsMove === 0) {
          this.winner = 'You Won!';
          return;
        }

        // Paper - Scissors
        if (this.usersMove === 1 && this.opponentsMove === 2) {
          this.winner = 'You Lost!';
          return;
        }

        // Scissors - Rock
        if (this.usersMove === 2 && this.opponentsMove === 0) {
          this.winner = 'You Lost!';
          return;
        }

        // Scissors - Paper
        if (this.usersMove === 2 && this.opponentsMove === 1) {
          this.winner = 'You Won!';
          return;
        }

        this.winner = 'Draw!';
      }
    },
    playAgain() {
      this.isGameOver = false;
      this.usersMove = null;
      this.opponentsMove = null;
      this.moveWillBeShown = '';
      this.winner = '';
      this.isRockSelected = null;
      this.isPaperSelected = null;
      this.isScissorsSelected = null;
      this.play = true;
    },
  },
})