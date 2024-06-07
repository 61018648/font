<template>
    <footer>
        <div class="footer-content container mx-auto flex justify-around flex-col md:flex-row">
            <div class="footer-info flex-auto">
                <h1>LOGO</h1>
                <p>字集专注搜集免费商用字体</p>
            </div>
            <div class="footer-category flex-1">
                <h3>字体分类</h3>
                <p>
                    <NuxtLink to="">中文字体</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="">英文字体</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="">免费商用</NuxtLink>
                </p>
            </div>
            <div class="footer-category flex-1">
                <h3>服务支持</h3>
                <p>
                    <NuxtLink to="">帮助中心</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="">服务条款</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="">赞助支持</NuxtLink>
                </p>
            </div>
            <div class="footer-category flex-1">
                <h3>关于我们</h3>
                <p>
                    <NuxtLink to="">联系我们</NuxtLink>
                </p>
                <p>
                    <a href="#">英文字体</a>
                </p>
                <p>
                    <a href="#">外国字体</a>
                </p>
            </div>
            <div class="footer-contact flex-auto">
                <h3>关注我们</h3>
                <p>
                    phone:400-000-1234
                </p>
                <p>
                    <iconpark-icon name="wechat"></iconpark-icon>
                    <iconpark-icon name="tencent-qq"></iconpark-icon>
                </p>
            </div>
        </div>
        <div class="footer-copy container mx-auto">
            <p>版权所有Copyright &copy;2024 <NuxtLink to="https://www.idc1680.com" target="_blank">主机测评</NuxtLink> 保留资源解释权，如有侵权，请联系我及时处理。 ICP备案号：</p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    background-color: #fff;
    padding: 2rem 0 .5rem 0;
    color: #78808d;
}
footer a{
    color: #333;
    transition: color .5s;
}
footer a:hover{
    color: #000;
}
.footer-content{
    padding: 1.5rem;
}
.footer-category h3,.footer-contact h3{
    margin-bottom: .6rem;
}
.footer-category p{
    padding: .2rem;
}
.footer-contact iconpark-icon{
    width: 40px;
    height: 40px;
    background-color: #ededed;
    border-radius: 50%;
    margin: 1.3rem .3rem 0 .3rem;
    color: #333;
    font-size: 26px;
    transition: background .5s;;
}
.footer-contact iconpark-icon:hover{
    background-color: #ff9800;
    color: #fff;
}
.footer-copy{
    padding: 1rem;
    border-top: 1px solid #e6e6e6;
    text-align: center;
}
</style>