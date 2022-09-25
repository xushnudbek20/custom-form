<template>
  <div v-if="item">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="textInput">
      {{ item.label }}
    </label>
    <input
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none focus:shadow-outline
      "
      id="textInput"
      type="text"
      :class="item.class"
      :value="value"
      :placeholder="item.placeholder"
      @input="$emit('input', $event.target.value)"
    />
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