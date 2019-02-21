<template>
  <div class="col-12">
    <div class="row mb-4">
      <div class="col-6">
        <img v-bind:src="'data:image/jpeg;base64,' + advert.main_picture_base64" />
      </div>
      <div class="col-6">
        <h3>Selling {{prepareType(advert.type)}}: {{advert.brand_name}} {{advert.model_name}}</h3>
        <h3>Price: {{advert.price}} $</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['advert'],

    methods: {
      prepareType(advertType) {
        return advertType.charAt(0).toUpperCase() + advertType.slice(1);
      }
    }
  }
</script>

<style>

</style>
