<template>
<div id="app">

  <router-view />
<loginPage/>
</div>

</template>

<script>
import LoginPage from './components/LoginPage.vue'
export default {
components: {LoginPage,},


}
</script>

<style>

</style>
