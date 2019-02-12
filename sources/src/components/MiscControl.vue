<template>
<div class="MiscControl box">
  <h3>divers</h3>
  <div class="flex flex-centerh">
    <div class="">
      <div class="box">
        <two-way-switch :name="'colormode'">
          <span slot="up">couleur</span>
          <span slot="down">n&amp;b</span>
        </two-way-switch>
      </div>
      <h4>couleurs</h4>
      <div class="box">
        <two-way-switch :name="'captions'">
          <span slot="up">oui</span>
          <span slot="down">non</span>
        </two-way-switch>
      </div>
      <h4>légendes</h4>
      <div class="box">
        <two-way-switch :name="'order'">
          <span slot="up">rangé</span>
          <span slot="down">mélangé</span>
        </two-way-switch>
      </div>
      <h4>ordre</h4>
    </div>
    <div class="">
      <div class="box">
        <push-button :name="'broadcast'" :delay="10000" :indicator="'two'">diffuser</push-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import PushButton from './PushButton';
import TwoWaySwitch from './TwoWaySwitch';

export default {
  name: 'MiscControl',
  components: {
    PushButton,
    TwoWaySwitch,
  },
};
</script>

<style lang="scss">

</style>
