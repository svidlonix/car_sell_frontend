<template>
  <layout>
    <flash-message></flash-message>
    <div class='login-block mt-5 ml-5 mr-5'>
      <b-form @submit='onSubmit'>

        <b-form-group class='mb-5'>
          <base64-upload :imageSrc="avatarSrc(form)" class='upload_avatar' @change="onFileChange" accept=".png, .jpg, .jpeg" />
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

        <b-button class='mt-4 mb-5' type='submit' variant='primary'>Update</b-button>
      </b-form>
    </div>
  </layout>
</template>

<script>
  import Layout from './layout/Layout.vue'
  import AvatarUploaderBase64 from 'vue-base64-upload'
  import axios from 'axios'

  export default {
    components: {
      layout: Layout,
      'base64-upload': AvatarUploaderBase64
    },

    data () {
      return {
        form: null
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
            'avatar_decode': this.avatar_decode || ''
          }, {
            headers: {
              'Authorization': localStorage.getItem('user-token')
            }
          }
        )
        .then(function () {
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

      onFileChange(e) {
        this.avatar_decode = e.base64;
      },

      avatarSrc(form) {
        debugger;
        if(form.avatar_decode == undefined) {
          return require('../assets/avatar-placeholder.gif');
        } else {
          return 'data:image/jpeg;base64,' + form.avatar_decode;
        }
      }
    }
  }
</script>

<style scope>
  .upload_avatar {
    width: 300px;
    height: 300px;
  }
</style>
