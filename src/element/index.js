import {
    Button,
    Input,
    Form,
    FormItem
} from 'element-ui'

const element={
    install:function(Vue){
        Vue.use(Button),
        Vue.use(Input),
        Vue.use(Form),
        Vue.use(FormItem)
    }
}

export default element