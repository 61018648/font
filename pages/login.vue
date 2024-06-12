<script setup>
const { name } = useAppConfig()


useHead({
    title: '用户登录 - 字集',
    meta: [
        { hid: 'keywords', name: 'keywords', content: '字体天下,首页' }
    ]
})
</script>
<template>
    <div class="site_content flex-1">
        <div class="container mx-auto">
            <h2 class="text-center">用户登录</h2>
            <form action="" method="post" class="login-form">
                <p class="row text-center">
                    <label for="user">账号:</label>
                    <input type="text" name="user">
                </p>
                <p class="row text-center">
                    <label for="password">密码:</label>
                    <input type="password" name="password">
                </p>
                <p class="row text-center">
                    <button class="login-btn btn">登录</button>
                </p>
            </form>
        </div>
    </div>
</template>

<style>
.login-form{
    display: flex;
    flex-direction: column;
    font-size: 16px;
}
.login-form label{
    display: inline-block;
    width: 60px;
}
.login-form input{
    width: 200px;
    height: 30px;
    border: 1px solid #ddd;
    padding: 5px 10px;
}
.login-form input:focus-visible{
    border: 1px solid #333;
}
.login-form .row{
    margin: 10px auto;
}

</style>