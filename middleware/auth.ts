export default defineNuxtRouteMiddleware((to,from)=>{
    console.log(`auth中间件`);
    const isLoginIn = true;
    if(!isLoginIn){
        return navigateTo('/login')
    }
})