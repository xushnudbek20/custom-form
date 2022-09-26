<template>
  <div id="app">
    <h2>Custom Form</h2>
    <hr>
    <div class="container">
      <div class="card p-4">
        <registration-form />
      </div>
    </div>
    <hr>
    <!-- <Toolbar msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import Toolbar from '@/views/tool-bar.vue'
import RegistrationForm from './views/Forms/registration-form.vue';
export default {
  name: 'App',
  components: {
    RegistrationForm,
    // Toolbar
  }
}
</script>

<style>

</style>
