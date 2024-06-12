export default defineEventHandler(({ context }) => {
    const { 
        params: { name },
     } = context;


    return {
        message: `hello ，${name}`
    }
})