<template>
  <layout>
    <flash-message></flash-message>
    <div class='container'>
      <div class='row'>
        <div class='col-12 mt-5 mb-5'>
          <h2>Adverts</h2>
        </div>
      </div>
      <div v-bind:key='advert' v-for='advert in adverts'>
        <div class='row'>
          <advert v-bind:advert="advert"/>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
  import Layout from './layout/Layout.vue'
  import Advert from './Advert.vue'
  import axios from 'axios'

  export default {
    components: {
      layout: Layout,
      advert: Advert

    },
    data () {
      return {
        adverts: []
      }
    },
    async created () {
      var result = await axios.get('http://localhost:3000//api/cars',
        {
          headers: {'Authorization': localStorage['user-token']},
          params: {
            limit: 10
          },
        }
      )
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });

      if (typeof result.message == 'undefined') {
        this.adverts = result
      } else {
        this.flashError(result.message);
      }

    }
  }
</script>

<style>
</style>
