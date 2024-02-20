<template>
    <div>
      <p>Data property example: {{ message }}</p>
      <button @click="changeMessage">Change Message</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, Vue!'
      };
    },
    computed: {
      computedPropertyExample() {
        return this.message.toUpperCase();
      }
    },
    methods: {
      changeMessage() {
        this.message = 'Hello, World!';
      }
    },
    watch: {
      message(newVal, oldVal) {
        console.log('Message changed from ' + oldVal + ' to ' + newVal);
      }
    },
    created() {
      console.log('Component created');
    },
    mounted() {
      console.log('Component mounted');
    }
  };
  </script>
  
  <style scoped>
  p {
    color: blue;
  }
  </style>
  