<template>
  <div v-if="item" class="form-group">
    <label class="form-label" >
      {{item.label}}
    </label>
    <div :class="(item.options && item.options.length >2)?'':'d-flex'">
      <div class="form-check" v-for="(option, index) in item.options" :key="index">
        <input
          class="form-check-input"
          type="radio"
          :class="option.class"
          :value="option.id"
          :id="`radio${index}`"
          name="radioInput"
          @input="$emit('input', $event.target.value)"
          :required="item.required"
        >
        <label class="form-check-label"  :for="`radio${index}`">
          {{option.label}}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x-input',
  props: {
    item:{
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>