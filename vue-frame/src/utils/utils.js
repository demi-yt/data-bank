/***
 * 本目录是放置所有 业务无关 的工具类方法.理论上本项目任何一个组件都可以使用
 */

/**
 * @description 判断一个变量是否为空
 * @author xiepeng
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj){
    switch (typeof obj) {
        case 'undefined':
            return true;
        case 'string'://去掉首尾换行/回车/tab符号
            if (obj.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true;
            break;
        case 'number':
            if(0 === obj || isNaN(obj)) return true;
            break;
        case 'boolean':
            if(!obj) return true;
            break;
        case 'object':
            if(null === obj || obj.length === 0) return true;
            for(let i in obj){
                return false;
            }
            return true;
    }
    return false;
}
/**
 * @description 将时间戳转化为yyyy-mm-dd格式,后期可以扩展更多的格式,如果有必要
 * @param obj
 * @param type
 * @returns {string}
 */
function fmtDate(obj,type='yyyy-mm-dd'){
    let date =  new Date(obj);
    let y = date.getFullYear();
    let m = '0'+(date.getMonth()+1);
    let d = '0'+(date.getDate());
    if(type === 'yyyy-mm-dd'){
        return y+'-'+m.substring(m.length-2,m.length)+'-'+d.substring(d.length-2,d.length);
    }
}

/**
 * @description 将一个对象的空值去掉
 * @param data
 * @return { void }
 */
function filterEmpty(data){
    if(typeof data !== 'undefined'){
        for(let i in data){
            let item = data[i];
            if (typeof item === 'object'){
                // 判断是否是空对象 包含了数组
                if(isEmpty(item)){
                    delete data[i]
                }else{
                    // 递归过滤掉对象中的对象
                    filterEmpty(item)
                }
            }else{
                if (typeof item === 'undefined' || item === null || item === '') {
                    delete data[i]
                }
            }
        }
    }
}

export {
    isEmpty,
    fmtDate,
    filterEmpty
}