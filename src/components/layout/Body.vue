<template>
  <div class='body'>
    <slot/>
  </div>
</template>
<script>

export default {
}
</script>
<style>
  .body{
    width:60%;
    margin-left:auto;
    margin-right:auto;
    background: rgb(72, 189, 224);
    border: 1px solid rgb(14, 219, 66);
    min-height: 638px;
    text-align: center;
  }
</style>
