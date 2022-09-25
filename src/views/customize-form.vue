<template>
  <div>
    <form class="" @submit="submit">
      <div class="">
      <!-- <div class="row"> -->
        <component
          v-for="item in formItems"
          :key="item.name"
          :item="item"
          v-model="item.value"
          :is="item.type + 'Input'"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import formMixin from '@/mixins/formMixin.js'

export default {
  mixins:[formMixin],
  data(){
    return {
      formItems:[
        {
          value: '',
          type: "text",
          label: "FIO",
          name: "fullname",
          required: true,
          placeholder: "FIO",
          class: "w-100",
          col:"col-12"
        },
        {
          value: '',
          type: "date",
          label: "Tug'ilgan kuni",
          name: "birth_date",
          required: true,
          placeholder: "01-01-1991",
          class: "w-100",
          col:"col-12"
        },
        {
          value: '',
          type: "radio",
          label: "Jinsi",
          name: "gender",
          required: true,
          placeholder: "",
          class: "w-100",
          col:"col-6"
        }
      ]
    }
  },
  methods:{
    submit(){
      console.log('submitted');
    }
  }
}
</script>

<style>

</style>