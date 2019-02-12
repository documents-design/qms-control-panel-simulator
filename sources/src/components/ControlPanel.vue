<template>
<div class="ControlPanel box">
  <h2>Panneau de contrôle</h2>
  <div class="flex">
    <directions-control/>
    <scroll-control/>
    <misc-control/>
  </div>
</div>
</template>

<script>
import DirectionsControl from './DirectionsControl';
import ScrollControl from './ScrollControl';
import MiscControl from './MiscControl';

export default {
  name: 'ControlPanel',
  components: {
    ScrollControl,
    DirectionsControl,
    MiscControl,
  },
};
</script>

<style lang="scss">
.ControlPanel {}
</style>
