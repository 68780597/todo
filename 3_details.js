var Details = {
    template:`
    <div style="background-color: red;">
        <h3>这是{{lid}}号商品详情页....</h3>
        <button @click="back">返回首页</button>
    </div>`,
    props:["lid"],
    methods:{
        back(){
            this.$router.push({path:"/"});
            // this.$router.back();
        }
    }
}