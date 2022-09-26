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
      <!-- <button @click="submit" class="btn btn-primary">Yuborish</button> -->
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