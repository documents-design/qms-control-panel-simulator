<template>
<div class="PushButton">
  <button type="button" name="button" @click="fire"><slot></slot></button>
  <component :is="indicator === 'two' ? 'TwoLedIndicator' : 'LedIndicator'" :active="active" />
</div>
</template>

<script>
import bus from './../bus';
import LedIndicator from './LedIndicator';
import TwoLedIndicator from './TwoLedIndicator';

export default {
  name: 'PushButton',
  components: {
    LedIndicator,
    TwoLedIndicator,
  },
  computed: {
    active: {
      get() {
        return this.$store.getters['controls/c'][this.storeProp];
      },
      set(val) {
        this.$store.commit('controls/setKey', {
          key: this.storeProp,
          val,
        });
        if (val) {
          bus.$emit('control', {
            type: this.name,
            value: this.active,
          });
        }
      },
    },
    storeProp() {
      return this.name;
    },
  },
  props: ['name', 'delay', 'indicator'],
  methods: {
    fire() {
      if (this.active) return;
      this.active = true;
      setTimeout(() => {
        this.active = false;
      }, this.delay);
    },
  },
};
</script>

<style lang="scss">
.PushButton {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.25em;
}
</style>
