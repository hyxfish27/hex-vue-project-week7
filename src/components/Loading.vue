<template>
  <div class="loader" id="loader" v-if="!isReady">
    <img src="@/assets/loader.svg" alt="loading..." />
  </div>
</template>

<style>
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1060;
}

.loader img {
  width: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<script>
export default {
  props: ['is-ready']
}
</script>
