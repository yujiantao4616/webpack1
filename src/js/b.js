export class b {
    constructor() {
        this.domId = 'x';
        this.message='Hello Vue!'
    }
    renderDom(str) {
        this.domId = '#'+str
        const app = new Vue({
            el: '#'+str, //对控制部分进行指定
            data: { //数据声明或赋值
                message: this.message//将页面上定义的对应 message参数进行渲染
            }
        })
    }
}
