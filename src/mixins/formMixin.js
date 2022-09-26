export default {
  components: { 
    textInput: ()=> import('@/components/form/textInput.vue'),
    dateInput: ()=> import('@/components/form/dateInput.vue'),
    selectInput: ()=> import('@/components/form/selectInput.vue'),
    radioInput: ()=> import('@/components/form/radioInput.vue'),
    checkboxInput: ()=> import('@/components/form/checkboxInput.vue'),
    phoneInput: ()=> import('@/components/form/phoneInput.vue'),
  }
}