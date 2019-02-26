<template>
  <layout>
    <flash-message></flash-message>
    <div class='login-block mt-5 ml-5 mr-5'>
      <b-form @submit='onSubmit'>

        <b-form-group>
          <img v-bind:src="image" />
        </b-form-group>

        <b-form-group label='Email address:'>
          <b-form-input id="email" type="email" v-model='form.email' required placeholder='Enter email'/>
        </b-form-group>

        <b-form-group label='First name:'>
          <b-form-input id='first_name' v-model='form.first_name' required placeholder='Enter first name'/>
        </b-form-group>

        <b-form-group label='Last name:'>
          <b-form-input id='last_name' v-model='form.last_name' required placeholder='Enter last name'/>
        </b-form-group>

        <b-form-group label='Password:'>
          <b-form-input id='password' type='password' v-model='form.password' placeholder='Enter password'/>
        </b-form-group>

        <b-form-group label='Confirm password:'>
          <b-form-input id='confirm_password' type='password' v-model='form.confirm_password' placeholder='Enter password'/>
        </b-form-group>

        <b-button class='mt-4' type='submit' variant='primary'>Update</b-button>
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
        form: null,
        image: '../assets/logo.png'
      }
    },

    created () {
      var userUrl = 'http://localhost:3000/api/profile'
      axios.get( userUrl, { headers: {'Authorization': localStorage.getItem('user-token')} })
      .then(response => (this.form = response.data))
      .catch(error => (this.flashError(error.message)));
    },
    
    methods: {
      async onSubmit (evt) {
        evt.preventDefault();
        var result = await axios.post('http://localhost:3000/api/profile_update',
          {
            'email': evt.currentTarget.email.value,
            'first_name': evt.currentTarget.first_name.value,
            'last_name': evt.currentTarget.last_name.value,
            'password': evt.currentTarget.password.value,
            'confirm_password': '',
            'avatar': ''
          }, {
            headers: { 'Authorization': localStorage.getItem('user-token') }
          }
        )
        .then(function (response) {
          return undefined;
        })
       .catch(function (error) {
         return error;
        });

        if (result == undefined) {
          this.$router.push('/profile')
          this.flashSuccess('Success Updated');
        } else {
          this.flashError(result.message);
        }
      },

      avatar() {
        return './assets/logo.png'
      }
    }
  }
</script>

<style>
</style>
