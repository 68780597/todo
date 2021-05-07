
var Index = {
    template:`
    <div style="background-color: pink;">
        <h3>这是首页....</h3>
        <button @click="goDetail_1">查看1号商品的详情</button>
        <router-link to="/details/2">查看2号商品的详情</router-link>
    </div>`,
    methods:{
        goDetail_1(){
            this.$router.push("/details/1");
        }
    }
}