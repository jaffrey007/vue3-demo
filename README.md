# vue3-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


#vue练手题目：

当然可以！学习Vue.js时，实践是非常重要的。以下是一些不同难度的练手题目，你可以根据自己的学习进度挑选合适的题目进行练习。

### 初级：

1. **数据绑定练习**：
   - 创建一个Vue实例，包含一个`data`对象，该对象有一个`message`属性，然后将这个属性显示在页面上。
   - 使用`v-model`指令创建一个文本输入框，实现输入内容实时显示在页面上。

2. **事件处理练习**：
   - 在Vue实例中添加一个方法，用于在点击按钮时弹出一个`alert`对话框显示当前时间。
   - 通过`v-on`或`@`指令绑定一个计数器，每点击一个按钮，计数器就自增。

3. **条件渲染练习**：
   - 使用`v-if`、`v-else-if`和`v-else`指令制作一个简单的条件判断，例如根据不同的用户类型显示不同的欢迎信息。

4. **列表渲染练习**：
   - 使用`v-for`指令展示一个包含多个项目名称的列表。
   - 添加一个按钮，用来向列表中添加新项目，并确保列表能够实时更新。

### 中级：

1. **组件化开发练习**：
   - 创建一个Vue组件，该组件接受一个`props`参数，并在模板中展示这个参数的值。
   - 创建一个待办事项列表组件，包括添加、删除待办事项的功能。

2. **表单处理练习**：
   - 创建一个表单组件，包括文本输入、选择框、单选按钮等，并使用`v-model`绑定数据模型。
   - 实现表单验证功能，确保用户输入的数据符合特定格式或规则。

3. **自定义指令练习**：
   - 创建一个自定义指令，当元素绑定该指令时，会在鼠标悬停时改变背景色。
   - 创建一个自定义指令，用于格式化文本内容，如将输入的文本转换为大写形式。

### 高级：

1. **路由管理练习**：
   - 使用Vue Router创建一个单页应用(SPA)，包含多个路由和视图。
   - 实现路由守卫，根据用户认证状态来允许或拒绝访问特定路由。

2. **状态管理练习**：
   - 使用Vuex创建一个状态管理库，存储应用级别的数据状态。
   - 实现至少一个mutation、一个action和一个getter，用于处理状态的更新，然后在组件中使用这些状态。

3. **完整项目练习**：
   - 创建一个类似天气预报的小应用，调用外部API获取数据，并在页面上展示。
   - 开发一个购物车系统，包括商品列表、购物车和结账页面，要求使用Vue组件和Vuex进行状态管理。

完成这些练习题后，你将对Vue.js的核心概念有更深刻的理解，并能够开始开发自己的Vue.js应用。记得在编码的过程中，多查看Vue的官方文档，这是学习Vue时的宝贵资源。
t