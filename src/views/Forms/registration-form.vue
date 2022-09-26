<template>
  <div>
    <form class="row g-3 needs-validation">
      <component
        v-for="item in formItems"
        :class="item.col"
        :key="item.name"
        :item="item"
        v-model="item.value"
        :is="item.type + 'Input'"
      />
      <button @click="submit" class="btn btn-primary">Yuborish</button>
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
          col:"col-6"
        },
        {
          value: '',
          type: "radio",
          label: "Jinsi",
          name: "gender",
          options:[{id:1, label: "Erkak"},{id:2, label:"Ayol"}],
          required: true,
          placeholder: "",
          class: "",
          col:"col-6"
        },
        {
          value: '',
          type: "select",
          label: "Hudud",
          name: "region_id",
          options:[{id:1, label: "Toshkent sh."},{id:2, label:"Andijon"}],
          required: true,
          placeholder: "Tanlang",
          class: "",
          col:"col-6"
        },
         {
          value: '',
          type: "phone",
          label: "Telefon",
          name: "phone",
          required: true,
          placeholder: "00 0000000",
          class: "",
          col:"col-6"
        },
      ]
    }
  },

  methods:{
    submit(){
      console.log('submitted');
      console.log(this.getValue())
    },
    getValue(){
      var myObj = new Object;
      this.formItems.map(item =>{
        const prop = item.name
        const value = item.value
        myObj[prop] = value;
      })
      return myObj
    }
  }
}
</script>

<style>

</style>