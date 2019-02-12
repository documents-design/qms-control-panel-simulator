<template>
<div class="TwoWaySwitch" :class="classes">
  <div class="TwoWaySwitch__label TwoWaySwitch__label--up" @mousedown="set(0)" @touchstart="set(0)">
    <slot name="up"></slot>
  </div>
  <div class="TwoWaySwitch__label TwoWaySwitch__label--down" @mousedown="set(1)" @touchstart="set(1)">
    <slot name="down"></slot>
  </div>
  <div class="TwoWaySwitch__bitonio"><button type="button" name="button" v-html="s"></button></div>
</div>
</template>

<script>
import bus from './../bus';

export default {
  name: 'TwoWaySwitch',
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
        this.state === 0 ? `${c}--up` : '',
        this.state === 1 ? `${c}--down` : '',
      ];
    },
    s() {
      /* eslint-disable no-nested-ternary, max-len */
      // uhhhhhhhhhhhhh
      return this.state === 0 ? this.$slots.up[0].children[0].text : this.$slots.down[0].children[0].text;
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
  },
};
</script>

<style lang="scss">
.TwoWaySwitch {
    height: 66px;
    position: relative;
    margin: auto;
    &--up {
        .TwoWaySwitch__bitonio {
            transform: translateX(-50%) translateY(calc(-50% - 22px));
        }
    }
    &--down {
        .TwoWaySwitch__bitonio {
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
        &--down {
            bottom: 0;
        }
    }
}
</style>
