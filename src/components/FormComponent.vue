<template>
  <div v-if="item">
    <template v-if="item.type == 'input'">
      <x-input :item="item" />
    </template>
    <template v-if="item.type == 'select'">
      <x-select :item="item" />
    </template>
    <template v-if="item.type == 'radio'">
      <x-radio :item="item" />
    </template>
    <template v-if="item.type == 'checkbox'">
      <x-checkbox :item="item" />
    </template>
  </div>
</template>

<script>
export default {
  props: {
    item:{
      type:Object,
      default: () => {}
    }
  },
  components: { 
    xInput: ()=> import('@/components/form/textInput.vue'),
    XSelect: ()=> import('@/components/form/selectInput.vue'),
    XRadio: ()=> import('@/components/form/radioInput.vue'),
    XCheckbox: ()=> import('@/components/form/checkboxInput.vue'),
  }
}
</script>

<style>

</style>