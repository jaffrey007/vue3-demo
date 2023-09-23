<template>
    <div>
        <button type="info" @click="logout">退出</button>
    </div>
</template>



<script>
export default {
methods: {
    logout() {
        window.sessionStorage.clear()
        // 用编程式路由导航重定向login
        this.$router.push('./login')
    }
}
};
</script>

<style lang="less" scoped>

</style>