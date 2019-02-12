<template>
<div class="TwoLedIndicator" :class="classes">
  <span class="TwoLedIndicator--led TwoLedIndicator--led--green"></span>
  <span class="TwoLedIndicator--led TwoLedIndicator--led--red"></span>
</div>
</template>

<script>
export default {
  name: 'TwoLedIndicator',
  props: ['active'],
  computed: {
    classes() {
      return [
        this.active ? 'TwoLedIndicator__active' : '',
      ];
    },
  },
};
</script>

<style lang="scss">
.TwoLedIndicator {
    width: 60px;
    height: 30px;
    padding: 4px;
    display: flex;
    &--led {
        flex: 0 0 24px;
        height: 24px;
        margin: 2px;
        border-radius: 100%;
        display: inline-block;
        background: grey;
        transition: all 0.3s;
    }
    .TwoLedIndicator--led--red {
        background: grey;
    }
    .TwoLedIndicator--led--green {
        background: green;
    }
    &__active {
        .TwoLedIndicator--led--red {
            background: red;
        }
        .TwoLedIndicator--led--green {
            background: grey;
        }
    }
}
</style>
