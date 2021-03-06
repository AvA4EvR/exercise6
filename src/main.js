import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
    methods: {
        changeStatus(status) {
            this.$emit('ageWasEdited', status);
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
