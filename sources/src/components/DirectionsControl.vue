<template>
<div class="DirectionsControl box">
  <h3>directions</h3>
  <div class="box flex">
    <push-button :name="'firstleft'" :delay="500">&larr;</push-button>
    <push-button :name="'firstright'" :delay="500">&rarr;</push-button>
  </div>
  <h4>image 1</h4>
  <div class="box flex">
    <push-button :name="'secondleft'" :delay="500">&larr;</push-button>
    <push-button :name="'secondright'" :delay="500">&rarr;</push-button>
  </div>
  <h4>image 2</h4>
  <div class="box flex">
    <push-button :name="'thirdleft'" :delay="500">&larr;</push-button>
    <push-button :name="'thirdright'" :delay="500">&rarr;</push-button>
  </div>
  <h4>image 3</h4>
  <div class="box flex">
    <push-button :name="'fourthleft'" :delay="500">&larr;</push-button>
    <push-button :name="'fourthright'" :delay="500">&rarr;</push-button>
  </div>
  <h4>image 4</h4>
</div>
</template>

<script>
import PushButton from './PushButton';

export default {
  name: 'DirectionsControl',
  components: {
    PushButton,
  },
};
</script>

<style lang="scss">
.DirectionsControl {
    }
</style>
