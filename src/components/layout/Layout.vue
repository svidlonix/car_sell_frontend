<template>
  <div>
    <vue-header/>
    <vue-body>
      <slot/>
    </vue-body>
    <vue-footer/>
  </div>
</template>
<script>
  import Header from './Header.vue'
  import Body from './Body.vue'
  import Footer from './Footer.vue'

  export default {
    components: {
      'vue-footer': Footer,
      'vue-body': Body,
      'vue-header': Header
    }
  }
</script>
<style>

</style>
