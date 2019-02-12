<template>
  <layout>
    <div class='login-block mt-5 ml-5 mr-5'>
      <b-form @submit="onSubmit">
        <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1" description="We'll never share your email with anyone else.">
          <b-form-input id="email" type="email" v-model="form.email" required placeholder="Enter email"/>
        </b-form-group>
        <label class="mt-4" for="inlineFormInputGroupUsername2">Password</label>
        <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter password"/>
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
          email: '',
          name: ''
        }
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        axios.post('http://localhost:3000/api/login',
          {
            'user': {
              "email": evt.currentTarget.email.value,
              // "firsdqt@first.com",
              "password": evt.currentTarget.password.value
              // "111111"
            }
          }
        )
        .then(function (response) {
          const token = response.data.token;
          localStorage.setItem('user-token', token);
          location.replace(location.origin);
        })
       .catch(function (error) {
         console.log(error.message);
        })
      }
    }
  }
</script>

<style>
.login-block {
  text-align: left;
}
</style>
