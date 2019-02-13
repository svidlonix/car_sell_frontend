<template>
  <layout>
    <flash-message></flash-message>
    <div v-bind:key='advert' v-for='advert in adverts'>
      <h3> {{advert}}</h3>
    </div>
  </layout>
</template>

<script>
  import Layout from './layout/Layout.vue'
  import axios from 'axios'

  export default {
    components: {
      layout: Layout
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
