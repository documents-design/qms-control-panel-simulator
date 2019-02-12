<template>
<div class="LedIndicator" :class="classes">
  <span class="LedIndicator--led"></span>
</div>
</template>

<script>
export default {
  name: 'LedIndicator',
  props: ['active'],
  computed: {
    classes() {
      return [
        this.active ? 'LedIndicator__active' : '',
      ];
    },
  },
};
</script>

<style lang="scss">
.LedIndicator {
    width: 28px;
    height: 28px;
    padding: 4px;
    &--led {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        display: block;
        background: grey;
        transition: all 0.3s;
    }
    &__active {
        .LedIndicator--led {
            background: red;
        }
    }
}
</style>
