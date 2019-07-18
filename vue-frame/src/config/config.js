// 环境配置文件
let env = "localhost"; //环境名称变量
const config = {
    localhost:{
        domain:'localhost', 
        server: "/local",
    },
    dev: {
        domain: "dev.xxx.cn", //本地环境，服务器地址需要在host配置
        server: "http://xxx.cn/api",
    },
    test: { // 测试环境
        domain: "test.xxx.cn", // 域名
        server: "http://test.xxx.cn/api", // 服务器地址
    },
    pre: { //预发布环境
        domain: "pre.xxx.cn", // 域名
        server: "http://pre.xxx.cn/api", // 服务器地址
    },
    prod: { //生产环境
        domain: "xxx.cn",
        server: "http://xxx.cn/api",
    }
};

//根据域名判断环境
let hostname = location.hostname;
for (let i in config) {
    if (config[i].domain === hostname) {
        env = i;
        break;
    }
}

export default {
    cokieDomain: config[env].domain,
    serverPath: {
        server: config[env].server,
        workbenchUrl:config[env].workbenchUrl,
    }
   
};