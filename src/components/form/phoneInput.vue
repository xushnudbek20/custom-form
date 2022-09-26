<template>
  <div class="form-group" v-if="item">
    <label class="text-start form-label" for="textInput">
      {{ item.label }}
    </label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">+998</span>
      <!-- <input type="text" class="form-control" placeholder="Username" aria-label="Username" > -->
      <input
        class="form-control"
        aria-describedby="basic-addon1"
        id="textInput"
        type="number"
        :class="item.class"
        :value="value"
        :placeholder="item.placeholder"
        @input="$emit('input', $event.target.value)"
        :required="item.required"
      />
    </div>
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