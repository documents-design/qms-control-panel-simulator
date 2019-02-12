<template>
<div class="ScrollControl box">
  <h3>scroll</h3>
  <div class="flex flex-centerh">
    <div class="ScrollControl__smoother">
      <div class="box">
        <three-way-switch :name="'smoothscroll'">
          <span slot="up">&uarr;</span>
          <span slot="idle">stop</span>
          <span slot="down">&darr;</span>
        </three-way-switch>
      </div>
      <h4>doux</h4>
    </div>
  </div>
</div>
</template>

<script>
import PushButton from './PushButton';
import ThreeWaySwitch from './ThreeWaySwitch';

export default {
  name: 'ScrollControl',
  components: {
    PushButton,
    ThreeWaySwitch,
  },
};
</script>

<style lang="scss">
.ScrollControl {
    }

.flex {
    display: flex;
}
</style>
