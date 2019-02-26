<template>
  <layout>
    <flash-message></flash-message>
    <div class='login-block mt-5 ml-5 mr-5'>
      <b-form @submit="onSubmit">
        <b-form-group id="exampleInputGroup1" label="Email address:">
          <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email"/>
        </b-form-group>
        <b-form-group id="exampleInputGroup2" label="Password:">
          <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter password"/>
        </b-form-group>
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox class="mt-4">Remember me</b-form-checkbox>
        </b-form-checkbox-group>
        <b-button class="mt-4" type="submit" variant="primary">Submit</b-button>
      </b-form>
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
        form: {
          email: ''
        }
      }
    },

    methods: {
      async onSubmit (evt) {
        evt.preventDefault();
        var result = await axios.post('http://localhost:3000/api/login',
          {
            'user': {
              'email': evt.currentTarget.email.value,
              // "firsdqt@first.com",
              'password': evt.currentTarget.password.value
              // "111111"
            }
          }
        )
        .then(function (response) {
          localStorage.setItem('user-token', response.data.token);
        })
       .catch(function (error) {
         return error;
        });
        if (result == undefined) {
          this.$router.push('/')
          this.flashSuccess('Success Login');
        } else {
          this.flashError(result.message);
        }
        // this.flashError('Validation failed');
      }
    }
  }
</script>

<style>
.login-block {
  text-align: left; 
}
</style>
