<!-- 本例子旨在说明vue实例个组成部分的意义 -->
<template>
    <div>
      <p>Data property example: {{ message }}</p>
      <button @click="changeMessage">Change Message</button>
      <!-- 将script中的计算属性渲染到页面上 -->
      <p>Computed property example: {{ computedPropertyExample }}</p>
    </div>
  </template>
  
  <script>
  export default  {
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
        this.message = 'Hello, world!';
      }
    },
    watch: {
      // 检测器，检测"message"的变化
      message(oldVal,newVal) {
        console.log('Message changed from ' + oldVal + ' to ' + newVal);
      }
    },
    // 当组件被创建后
    created() {
      console.log('Component created');
    },
    // 当组件被挂载后
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
  