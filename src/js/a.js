import {b} from './b'
import c from './c'
class a extends b{
    constructor() {
        super()
        this.x='a'
    }
    changeMes(){
        console.log(b.message)
        b.message='Hello World!'
        // const app = new Vue({
        //     el: this.domId, //对控制部分进行指定
        //     data: { //数据声明或赋值
        //         message: "Hello World!"//将页面上定义的对应 message参数进行渲染
        //     }
        // })
    }
    clearMes(){
        c.clearMes(this.domId)
    }
}
const a1 = new a()
window.a1 = a1