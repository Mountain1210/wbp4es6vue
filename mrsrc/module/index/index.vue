<template>

    <el-container >
    <el-header style="height:auto" id="head">
      <el-row>
        <el-col :span="4"><div class="logo" style="float:left; padding:24px 16px; font-size:16px; color:#fff;">
          太平洋保险
        </div></el-col>
        <el-col :span="14"><div class="grid-content bg-purple-light"></div><ul class="topmenu">
        <li><span class="iconfont icon-category"></span>系统配置</li>
        <li><span class="iconfont icon-form"></span>信息统计</li>
        <li><span class="iconfont icon-text"></span>短信管理</li>
        <li><span class="iconfont icon-lights"></span>激活管理</li>
        <li><span class="iconfont icon-rfq"></span>UMP管理</li>
        <li><span class="iconfont icon-set"></span>系统管理</li>
      </ul></el-col>
        <el-col :span="6">  <ul class="topmentu-right">
            <li><span class="iconfont icon-electronics"></span>首页</li>
            <li><span class="iconfont icon-account"></span>系统管理员</li>
          </ul></el-col>
      </el-row>
    </el-header>
    <el-header style="height:auto; overflow:hidden" id="menuContent">
      <div class="submenucontent" style="overflow:hidden">
      <ul class="submenu">
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
        <li>参数配置<span class="iconfont icon-close"></span></li>
      </ul>
    </div>
    </el-header>
     <router-view/>
    <!-- <el-container id="mainContent">
        <el-aside>
            <div class="subsmain" @click="clickOdd"> 现在的数字为：{{count}}</div>
        </el-aside>
        <el-main><router-view></router-view></el-main>
    </el-container> -->
  </el-container>

</template>

<script>
  window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js');
  import {mapGetters,mapActions} from "vuex"
export default {
  name: 'app',
  //  页面加载之前
  created() {
  }
  //  页面加载后
  ,mounted() {
    // alert($('.submenu').width());
    // alert($(window).width())
    // alert($('#head').height());
    // alert($('#menuContent').height());
    // $('#mainContent').height($(window).height()-$('#menuContent').height()-$('#head').height())
    //注册菜单和侧边栏分级事件
    // $(".button-collapse").sideNav();
    // $('.collapsible').collapsible();
    //
    // //菜单列表点击隐藏
    // $('.menu-item').click(function () {
    //   $('#menu-list').sideNav('hide');
    // })
  }
}
</script>

<style>


.topmenu li,.topmentu-right li{display: inline-block; padding:24px 16px; font-size: 16px; background-color: rgb(77, 179, 252); color: #fff;}
.topmenu li span,.topmentu-right span{padding:0 4px 0 0}
.submenu li{display: inline-block;}
.el-header, .el-footer {
   background-color: #B3C0D1;
   color: #333;
   text-align: center;
   line-height: 60px;
 }
 .topmentu-right{padding-left: 12%}
.el-header{background-color: #44b1ff}
.el-header:nth-child(2){background-color: #e4e4e4; text-align: left; padding:0px;line-height: 100%; border-bottom:1px solid #ccc}
.el-header:nth-child(2) li{padding:12px 16px; border-right:1px solid #ccc; font-size: 14px}
.el-header:nth-child(2) li span{cursor: pointer; margin-left:12px; }
  .el-header:nth-child(2) li .icon-close:before{margin-top:2px}
 .el-aside {
   background-color: #D3DCE6;
   color: #333;
   text-align: center;
   line-height: 200px;
 }

 .el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   line-height: 160px;
 }

 body > .el-container {
   margin-bottom: 40px;
 }

 .el-container:nth-child(5) .el-aside,
 .el-container:nth-child(6) .el-aside {
   line-height: 260px;
 }

 .el-container:nth-child(7) .el-aside {
   line-height: 320px;
 }
 .submenu{position: relative; white-space:nowrap; display: block;}
</style>
