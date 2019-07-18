// axios封装http请求
import Vue from 'vue'
import axios from 'axios'
import config from '@/config/config'
import qs from 'qs';
import * as util from '@/utils/utils';
import Cookies from 'js-cookie';
const rootApi = config.serverPath.server;
const workbenchUrl = config.serverPath.workbenchUrl;
// 这里定义token，取到你设置好的token的值
const token = Cookies.get('x-auth-token',{domain:'.stars.ueb.cn'});


//取消请求
let CancelToken = axios.CancelToken;

//设置默认请求头，如果不需要可以取消这一步
axios.defaults.headers = {
    'X-Resquested-With': 'XMLHttpRequest',
    "Content-Type": "application/json;charset=UTF-8"
};
//设置请求超时时间
axios.defaults.timeout = 10000;

//开始请求设置，发起拦截处理
//config代表发起请求的参数实体
axios.interceptors.request.use(config => {
    //得到参数中的requestname字段，用于决定下次发起请求，取消相应的  相同字段的请求
    //post和get请求方式的不同，使用三木运算处理
    let requestName = config.method === 'post' ? config.data.requestName : config.params.requestName

    //判断，如果这里拿到上一次的requestName，就取消上一次的请求
    if (requestName) {
        if (axios[requestName] && axios[requestName].cancel) {
            axios[requestName].cancel()
        }
        config.cancelToken = new CancelToken(c => {
            axios[requestName] = {};
            axios[requestName].cancel = c
        })
    }
    if (token) {
        // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
        config.headers["x-auth-token"] = token;
    }
    return config
}, error => {
    return Promise.reject(error)
});


let toLogin = (res)=>{
  let {retCode} = res.data || {};
  if(retCode === '0006'){
    let url= encodeURIComponent(location.href);
    location.href = workbenchUrl+'/login?url='+url;
  }
};

//将axios的post方法绑定到vue的实例上面
Vue.prototype.$post = function(url, params,isJson=true,isUpdate=false) {
    //return this.$call(url,params)
    return new Promise((resolve, reject) => {
        if(!isUpdate) {
            util.filterEmpty(params);
        }
        axios.post(rootApi + url, !isJson ? qs.stringify(params) : params)
            .then(res => {
              //登录拦截
              toLogin(res)
                resolve(res)
            }).catch(err => {
            reject(err)
        })
    })
};

//将axios的get方法绑定到vue的实例上面
Vue.prototype.$get = function(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(rootApi + url, {
                params: params
            }).then(res => {
                //登录拦截
              toLogin(res)
                resolve(res) // 返回请求成功的数据 data
            }).catch(err => {
                reject(err)
            })
        })
    }
    // 下载模板
    Vue.prototype.$exportGet = function(url, params) {
        return new Promise((resolve, reject) => {
            axios.get(rootApi + url, {
                responseType: 'blob',
                params: params
            }).then(res => {
              //登录拦截
              toLogin(res)
                resolve(res) // 返回请求成功的数据 data
            }).catch(err => {
                reject(err)
            })
        })
    }
    // 上传文件
    Vue.prototype.$exportPost = function(url, params) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'post',
                responseType: 'blob',
                timeout: 60000,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                url: rootApi + url,
                data : params // get 请求时带的参数
            }).then(res=>{
              //登录拦截
              toLogin(res)
                resolve(res) // 返回请求成功的数据 data
            }).catch(err => {
                reject(err)
            })
        })
    }


 /**
 * 过滤掉空属性
 * @param {*} data
 */
// function filterEmpty(data){
//     if(typeof data !== 'undefined'){
//         for(let i in data){
//             var item = data[i];
//             if (typeof item === 'object') {
//                 //空数组 删除
//                 if (Array.isArray(item)) {
//                     if (item.length == 0) {
//                         delete data[i]
//                         continue
//                     }
//                 }
//                 // 判断是否是空对象
//                 if(isEmpty(item)){
//                     delete data[i]
//                     continue
//                 }
//                 // 递归过滤掉对象中的对象
//                 filterEmpty(item)
//             }else{
//                 if (typeof item === 'undefined' || item === null || item === '') {
//                     delete data[i]
//                     continue
//                 }
//             }
//         }
//     }
// }
// /**
// * 判断是否是空对象
// * @param {*} item
// */
// function isEmpty(item){
//     for (var name in item) {
//         return false;
//     }
//     return true;
// }
export default axios