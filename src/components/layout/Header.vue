<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">CarSell</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse" />

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href='/#/adverts' class='ml-3 mr-3'>Cars</b-nav-item>
          <b-nav-item href='/#/adverts' class='ml-3 mr-3'>Bikes</b-nav-item>
          <b-nav-item href='/#/adverts' class='ml-3 mr-3'>Trucks</b-nav-item>
          <b-nav-item href='/#/contacts' class='ml-3 mr-3'>Contacts</b-nav-item>
          <b-nav-item href='/#/contacts' class='ml-3 mr-3'>About</b-nav-item>
          <b-nav-item href='/#/faqs' class='ml-3 mr-3'>FAQs</b-nav-item>
          <b-nav-item-dropdown class='ml-3 mr-3'>
            <template slot="button-content"><em>User</em></template>
            <div v-if='checkLoginUser()'>
              <b-dropdown-item href='/#/profile'>Profile</b-dropdown-item>
              <b-dropdown-item href='/#/new_advert'>New Advert</b-dropdown-item>
              <b-dropdown-item v-on:click='signOut' href='#'>Signout</b-dropdown-item>
            </div>
            <div v-else>
              <b-dropdown-item href="/#/login">Login</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
          <div v-if='checkLoginUser()'>
            <b-img :src="avatar()" class='thumbnail' />
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    methods: {
      checkLoginUser() {
        return localStorage.getItem('user-token');
      },

      async signOut(){
        var result = await axios.delete('http://localhost:3000/api/logout',
          {
            'params': {
              'token': localStorage.getItem('user-token')
            }
          }
        )
        .then(function (response) {
        })
       .catch(function (error) {
         return error;
        });
        if (result == undefined) {
          localStorage.clear();
          this.$router.push('/')
          this.flashSuccess('Success Logout');
        } else {
          this.flashError(result.message);
        }
        // this.flashError('Validation failed');
      },

      avatar() {
        return 'data:image/jpeg;base64,' + localStorage.getItem('user-avatar')
      }
    }
  }
</script>
<style scoped>

  .navbar-brand {
    margin-left: 10%;
  }

  .navbar-nav {
    margin-left: 10%;
  }

  .nav-item  {
    font-size: 1.5em;
  }

  .thumbnail{
    width: 50px;
    height: 50px;
    border-radius: 50%
  }
</style>
