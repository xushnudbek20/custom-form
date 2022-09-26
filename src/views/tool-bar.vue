<template>
  <div class="container">
    <div class="row">
      <div class="col-3 tool-menu">
        <h3>Toolbar</h3>
        <draggable v-model="tools" draggable=".item" class="tool-draggable">
          <div v-for="tool in tools" :key="tool.id" class="item">
              {{tool.name}}
          </div>
        </draggable>
      </div>
      <div class="col-9">
        <h3>Form</h3>
        <draggable v-model="tools" draggable=".item" class="tool-draggable">
          <new-form />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import NewForm from './Forms/new-form.vue';
export default {
  components: {
    draggable,
    NewForm,
  },
  data() {
    return {
      tools: [
        { id: 1, name: "Select" },
        { id: 2, name: "Input" },
        { id: 3, name: "Radio" },
      ],
    };
  },
};
</script>

<style>
</style>