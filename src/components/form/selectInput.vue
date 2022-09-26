<template>
  <div class="form-group" v-if="item">
    <label class="text-start form-label" for="textInput">
      {{ item.label }}
    </label>
    <select
      class="form-select"
      :class="item.class"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :required="item.required"
    >
      <option selected disabled value="">{{item.placeholder}}</option>
      <option
        v-for="(option, index) in item.options"
        :key="index"
        :value="option.id"
      >
      {{option.label}}
      </option>
    </select>
  </div>
 
</template>

<script>
export default {
  name: "textInput",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
 