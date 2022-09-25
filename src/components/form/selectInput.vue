<template>
  <div v-if="item">
    <label for="x-input">{{item.label}}</label>
    <input id="x-input" :type="item.item_type" :class="item.class" v-model="value" :placeholder="item.placeholder">
  </div>
</template>

<script>
export default {
  name: 'x-input',
  props: {
    item:{
      type: Object,
      default: () => null
    }
  }
}
</script>

<style>

</style>