// 导入vue
import Vue from 'vue';
import Vuex from 'vuex';

// 在vue上挂载vuex
Vue.use(Vuex);

// 创建store对象
const store = new Vuex.Store({
  state: {
    count: 0
  },


    //   在 Store 中定义了一个变更（mutation）increment，
  // 用于同步地修改状态。这里的 increment 方法会将 count 的值加一。

  mutations: {
    // define a increment method, which make count 自增1.
    increment(state) {
      state.count++;
    }
  },

  //  actions用来解决异步流程来改变state数据。 actions: 指正在操作的数据，操作完后会同步到state。
  //  在 Store 中定义了一个行为（action）incrementAsync，
  // 用于处理异步操作。在这里，通过 setTimeout 模拟了一个异步操作，
  // 在1秒后提交（commit）一个名为 increment 的变更。
  // 异步操作列表，可能不止incrementAsync一个。
  actions: {
    /*define a action named incrementAsync, this action will commit a increment method 
    in one second.  */
    incrementAsync({ commit }) {
      setTimeout(() => {
        // commit increment
        commit('increment');
      }, 1000);
    }
  },



  //  getCount 是 Vuex 中的一个 getter（获取器）函数，用于从 Vuex 的状态中获取数据并对其进行处理后
  // 返回结果。
  getters: {
    getCount: state => state.count
  },

});

export default store;
