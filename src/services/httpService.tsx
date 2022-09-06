import Taro from "@tarojs/taro";


export default {
    request(options:Taro.request.Option,method:keyof Taro.request.Method = 'GET') {
        return Taro.request({
            ...options,
            method,
            header:{
                'content-type':'application/json',
                ...options.header
            }
        })
    },
    get(option:Taro.request.Option) {
        return this.request(option, 'GET')
    },
    post(){
        
    }
}