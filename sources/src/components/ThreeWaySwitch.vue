<template>
<div class="ThreeWaySwitch" :class="classes">
  <div class="ThreeWaySwitch__label ThreeWaySwitch__label--up" @mousedown="set(-1)" @touchstart="set(-1)">
    <slot name="up"></slot>
  </div>
  <div class="ThreeWaySwitch__label ThreeWaySwitch__label--idle" @click="release">
    <slot name="idle"></slot>
  </div>
  <div class="ThreeWaySwitch__label ThreeWaySwitch__label--down" @mousedown="set(1)" @touchstart="set(1)">
    <slot name="down"></slot>
  </div>
  <div class="ThreeWaySwitch__bitonio"><button type="button" name="button" @mouseup="release" @touchend="release" v-html="s"></button></div>
</div>
</template>

<script>
import bus from './../bus';

export default {
  name: 'ThreeWaySwitch',
  props: ['name'],
  computed: {
    state: {
      get() {
        return this.$store.getters['controls/c'][this.storeProp];
      },
      set(val) {
        this.$store.commit('controls/setKey', {
          key: this.storeProp,
          val,
        });
      },
    },
    storeProp() {
      return this.name;
    },
    classes() {
      const c = this.$options.name;
      return [
        this.state === -1 ? `${c}--up` : '',
        this.state === 0 ? `${c}--idle` : '',
        this.state === 1 ? `${c}--down` : '',
      ];
    },
    s() {
      /* eslint-disable no-nested-ternary */
      return this.state === -1 ? '&uarr;' : this.state === 1 ? '&darr;' : 'stop';
    },
  },
  methods: {
    set(val) {
      this.state = val;
      bus.$emit('control', {
        type: this.name,
        value: this.state,
      });
    },
    release() {
      this.set(0);
    },
  },
};
</script>

<style lang="scss">
.ThreeWaySwitch {
    height: 66px;
    width: 32px;
    position: relative;
    margin: auto;
    &--up {
        .ThreeWaySwitch__bitonio {
            transform: translateX(-50%) translateY(calc(-50% - 22px));
        }
    }
    &--idle {
        .ThreeWaySwitch__bitonio {
            transform: translateX(-50%) translateY(calc(-50%));
        }
    }
    &--down {
        .ThreeWaySwitch__bitonio {
            transform: translateX(-50%) translateY(calc(-50% + 22px));
        }
    }
    &__bitonio {
        position: absolute;
        height: 22px;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        left: 50%;
        text-align: center;
        transition: all 0.3s;
        button {
            line-height: 14px;
            font-size: 12px;
        }
    }

    &__label {
        font-size: 12px;
        position: absolute;
        left: 0;
        width: 100%;
        text-align: center;
        &--up {
            top: 0;
        }
        &--idle {
            top: 50%;
            transform: translateY(-50%);
        }
        &--down {
            bottom: 0;
        }
    }
}
</style>
