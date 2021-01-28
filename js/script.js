// Creiamo un input con un tasto submit.
// Dopo aver scritto qualcosa nell'input, se:
// 1) premo invio oppure
// 2) clicco sul pulsante submit
// il codice pusha il contenuto dell'input in un array all'interno di data (vuejs)
// Se ci riuscite (col tempo) visualizzare nella parte sottostante l'input la lista degli elementi in questo array (quello che popoliamo ad ogni submit)

new Vue({
  el: '#root',
  data: {
    array: [],
    input: ''
  },
  methods: {
    submit: function() {
      if(this.input === '') {
        alert('Inserisci qualcosa')
      } else {
        this.array.push(this.input);
        this.input = '';
      }
    },
    remove: function(index) {
      this.array.splice(index, 1);
    },
    reset: function() {
      this.array = [];
    }
  }
})

Vue.config.devtools = true;
