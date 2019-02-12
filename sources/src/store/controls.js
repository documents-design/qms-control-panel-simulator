export default {
  namespaced: true,
  state: {
    firstleft: false,
    firstright: false,
    secondleft: false,
    secondright: false,
    thirdleft: false,
    thirdright: false,
    fourthleft: false,
    fourthright: false,
    colormode: 0,
    captions: 0,
    order: 0,
    broadcast: false,
    scrollup: false,
    scrolldown: false,
    smoothscroll: 0,
  },
  getters: {
    c: s => s,
  },
  mutations: {
    /* eslint-disable no-param-reassign */
    setKey(s, p) {
      s[p.key] = p.val;
    },
  },
  actions: {
    setKeyFromEvent({
      commit,
      state,
    }, event) {
      if (event.name === 'smoothscroll') {
        commit('setKey', {
          key: event.name,
          val: event.value,
        });
      }
      if (['colormode', 'captions', 'order'].includes(event.name)) {
        commit('setKey', {
          key: event.name,
          val: event.value,
        });
      }
      if (event.name === 'broadcast') {
        if (state[event.name]) return;
        commit('setKey', {
          key: event.name,
          val: true,
        });
        setTimeout(() => {
          commit('setKey', {
            key: event.name,
            val: false,
          });
        }, 10000);
      } else {
        if (state[event.name]) return;
        commit('setKey', {
          key: event.name,
          val: true,
        });
        setTimeout(() => {
          commit('setKey', {
            key: event.name,
            val: false,
          });
        }, 600);
      }
    },
  },
};
