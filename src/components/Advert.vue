<template>
  <div class="col-12">
    <div class="row mb-4">
      <div class="col-6">
        <img v-bind:src="'data:image/jpeg;base64,' + advert.main_picture_base64" />
      </div>
      <div class="col-6 adventure-description">
        <h3>{{prepareType(advert.type)}} {{advert.brand_name}} {{advert.model_name}}</h3>
        <h3>Price: {{advert.price}} $</h3>
        <div class='characteristic'>
          <div class="row mt-4 mb-4">
            <div class="col-3">
              <label>
                <font-awesome-icon icon="tachometer-alt"/>
                {{advert.distance_covered}}
              </label>
            </div>
            <div class="col-3">
              <label>
                <font-awesome-icon icon="gas-pump"/>
                {{advert.fuel}}
              </label>
            </div>
          </div>
          <div class="row mt-4 mb-4">
            <div class="col-3">
              <label>
                <font-awesome-icon icon="cogs"/>
                {{advert.transmission}}
              </label>
            </div>
            <div class="col-3">
              <label>
                <font-awesome-icon icon="road"/>
                {{advert.year}}
              </label>
            </div>
          </div>
        </div>
        <font-awesome-icon icon="clock"/>
        {{advert.created_date}}
      </div>
    </div>
  </div>
</template>

<script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  export default {
    props: ['advert'],

    components: {
      'font-awesome-icon': FontAwesomeIcon

    },

    methods: {
      prepareType(advertType) {
        return advertType.charAt(0).toUpperCase() + advertType.slice(1);
      }
    }
  }
</script>

<style>
.adventure-description{
  text-align: left;
}

</style>
