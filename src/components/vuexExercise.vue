<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">Increment Async</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';


export default {

  computed: {
    // 使用 mapState 辅助函数将 Vuex 中的 count 状态映射到组件的计算属性中。
    ...mapState(['count'])
  },

  methods: {
// 使用 mapActions 辅助函数将 Vuex 中的 increment 和 incrementAsync 操作映射到组件的方法中。
    ...mapActions(['increment', 'incrementAsync'])
  }
};
</script>
