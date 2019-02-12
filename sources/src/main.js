// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import socketio from 'socket.io-client';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import bus from './bus';
import config from './../../shared/config';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
  created() {
    this.socket = socketio(`${config.host}:${config.ports.socket}`);
    this.socket.on('command', (data) => {
      bus.$emit('gotControl', data);
      this.socket.emit('a_command', data);
    });
    bus.$on('gotControl', (data) => {
      this.$store.dispatch('controls/setKeyFromEvent', {
        ...data,
      });
    });
    bus.$on('control', (data) => {
      this.socket.emit('a_command', data);
    });
  },
});
