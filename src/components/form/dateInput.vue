<template>
  <div class="form-group" v-if="item">
    <label class="text-start form-label" for="dateInput">
      {{ item.label }}
    </label>
    <input
      class="form-control"
      id="dateInput"
      type="date"
      :class="item.class"
      :value="value"
      :placeholder="item.placeholder"
      @input="$emit('input', $event.target.value)"
      :required="item.required"
    />
  </div>
</template>

<script>
export default {
  name: "dateInput",
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