<template>
  <div class='header'>
    <div class='nav-nav'>
      <router-link class='header-menu-item' to='home'>Home</router-link>
      <router-link class='header-menu-item' to='adverts'>Cars</router-link>
      <router-link class='header-menu-item' to='adverts'>Bikes</router-link>
      <router-link class='header-menu-item' to='adverts'>Trucks</router-link>
      <router-link class='header-menu-item' to='contacts'>Contacts</router-link>
      <router-link class='header-menu-item' to='about'>About</router-link>
      <router-link class='header-menu-item' to='faqs'>FAQs</router-link>

      <div class='dropdown'>
        <b-nav-item-dropdown id="nav7_ddown" text="Dropdown Button" class="m-md-2" right>
          <b-dropdown-item>one</b-dropdown-item>
          <b-dropdown-item>two</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <router-link to='login'>Login</router-link>
        </b-nav-item-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
  .header {
    position: absolute;
    height: 150px;
    right: 0;
    top: 0;
    left: 0;
    background-color: #efefef;
    text-align: center;
  }

  .header-menu-item {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 1.5em;
    background-color: pink;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    color: #000000;
    text-decoration: none;
  }

  .header-menu-item:hover {
    opacity: 0.3;
  }

  .nav-nav {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .dropdown {
    display: inline-block;
    list-style-type: none;
    text-decoration: none;
  }
</style>
