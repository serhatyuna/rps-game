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
      let movesDOM = document.querySelector('.moves');
      if (move === 'rock') {
        this.usersMove = 0;
        this.isRockSelected = true;
        this.isPaperSelected = false;
        this.isScissorsSelected = false;
        movesDOM.style.justifyContent = 'flex-start';
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
        movesDOM.style.justifyContent = 'flex-end';
        this.isGameOver = true;
        this.makeOpponentsMove();
      } else {
        this.play = false;
      }
    },
    makeOpponentsMove() {
      if (this.usersMove !== null) {
        this.opponentsMove = Math.floor(Math.random() * 3);
        if (this.opponentsMove === 0) {
          this.moveWillBeShown = 'rock';
        } else if (this.opponentsMove === 1) {
          this.moveWillBeShown = 'paper';
        } else if (this.opponentsMove === 2) {
          this.moveWillBeShown = 'scissors';
        } else {
          this.play = false;
        }
      }
    }
  },
})