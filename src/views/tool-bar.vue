<template>
  <div>
    <div class="row">
      <div class="col-3 tool-menu">
        <h3>Toolbar</h3>
        <draggable v-model="tools" draggable=".item" class="tool-draggable">
          <div v-for="tool in tools" :key="tool.id" class="item">
              {{tool.name}}
          </div>
        </draggable>
      </div>
      <div class="col-3">
        <h3>Form</h3>
        <draggable v-model="tools" draggable=".item" class="tool-draggable">
          <!-- <div v-for="tool in tools" :key="tool.id" class="item">
              {{tool.name}}
          </div> -->
          <!-- Paste here form item -->
          <customize-form />
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import CustomizeForm from './customize-form.vue';
export default {
  components: {
    draggable,
    CustomizeForm,
  },
  data() {
    return {
      tools: [
        { id: 1, name: "150" },
        { id: 2, name: "250" },
      ],
    };
  },
};
</script>

<style>
</style>