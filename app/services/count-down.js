import Ember from 'ember';

export default Ember.Service.extend({
  userGuess: 10,

  countDownGuess(){
    this.set('userGuess', this.get('userGuess') - 1);

    if (this.get('userGuess') === 0) {
      alert("YOU LOSE");
      window.location.reload();
    }
  }
});
