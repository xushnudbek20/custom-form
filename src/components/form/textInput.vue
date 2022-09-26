<template>
  <div class="form-group" v-if="item">
    <label class="text-start form-label" for="textInput">
      {{ item.label }}
    </label>
    <input
      class="form-control"
      id="textInput"
      type="text"
      :class="item.class"
      :value="value"
      :placeholder="item.placeholder"
      @input="$emit('input', $event.target.value)"
      :required="item.required"
    >
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