(function() {
  'use strict'
  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        'task 1',
        'task 1',
        'task 1'
      ]
    },
    methods: {
      addItem: function() {
        this.todos.push(this.newItem);
        this.newItem = ""
      }
    }
  })
  // two way data binding (to UI)
})();