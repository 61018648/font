const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log('服务已启动')
})
app.get('/', (request, response) => {
    response.send('你好');
})
const data = [
    {
        id: 1,
        title: '叶利航九龄卡通',
        content: '<p style="color:#ff0000">叶利航九龄卡通</p>',
        fontUrl: 'https://www.mfonts.cn/wp-content/uploads/2024/06/2024060614591339.ttf'
    },
    {
        id: 2,
        title: '叶根友守中曲画',
        content: '<p style="color:#ff0000">叶根友守中曲画</p>',
        fonturl: 'https://www.mfonts.cn/wp-content/uploads/2024/06/2024060614425569.ttf'
    },
    {
        id: 3,
        title: '云峰飞云体',
        content: '<p style="color:#ff0000">云峰飞云体</p>',
        fontUrl: 'https://www.mfonts.cn/wp-content/uploads/2024/06/2024060311440455.ttf'
    }
]

app.get('/posts', (request, response) => {
    response.send(data)
})
app.get('/posts/:postId', (request, response) => {
    // 获取内容ID
    const { postId } = request.params;
    // 查找具体内容
    const posts = data.filter(item => item.id == postId);
    // 做出响应
    response.send(posts[0])
})