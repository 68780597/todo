Vue.component("my-header", {
    template: `
    <div>
        <ul>
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/details">商品详情页</router-link></li>
            <li><router-link to="/products">商品列表页</router-link></li>
        </ul>
    </div>
    `
})