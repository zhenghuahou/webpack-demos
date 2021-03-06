/**
 * 配置
 */

 const project = "fe-workflow";

 const envConfig = {
    test :{
        publicPath:`http://xx.aa.com/resource/${project}_test/`
    },
    prod :{
        publicPath:`http://xx.bb.com/${project}/`
    }
};

export default {
    "name":project,
    //测试环境，线上环境的publicPath不一样，统一在这里面配置
    "env":envConfig,
    "zipFilePath": `${process.cwd()}/zip/${project}.zip`,
    "logoPath":'src/global/assets/logo.png'
}


