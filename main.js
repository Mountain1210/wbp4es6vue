/**
 * 
 * @authors 王伟 (you@example.org)
 * @date    2019-06-26 10:28:16
 * @version $Id$
 */

import Vue from "vue"; //引入vue文件
import App from "./msrc/App.vue" // 引入模板文件

//创建vue实例并且将其挂在到app节点上
new Vue({ 
    el:'#app',
    render:(h)=>h(App)
})