import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => { new Vue({
  el: "#app",
  data: {
    list: [
      {name: 'Do Homework', priority: 'high'},
      {name: 'Grocery shopping', priority: 'low'}
    ],
    newItem: '',
    priority: ''
  },
  methods: {
    saveNewItem: function (e) {
      e.preventDefault();
      this.list.push({
        name: this.newItem,
        priority: this.priority
      });
      this.newItem = '',
      this.priority = '';

    },

    updatePriority: function (index) {
      if (this.list[index].priority === 'high') {
        this.list[index].priority = 'low'
      } else {
        this.list[index].priority = 'high'
      }
    },

    deleteItem: function (index) {
      this.list.splice(index, 1);
    }
  }
});

});
