
import css from "../common/css/index.css"
import less from "../common/css/indexless.less"
import mov from '../common/media/demo.mp4';

import lodash from 'lodash'
import jquery from "jquery";
// document.write('<div style="color:#F11">Welcome to AI World</div>')
// console.log($)
// console.log(_)
// console.log(mov)
document.getElementById('video').src = mov;
    //函数
   document.getElementById('btnCatchPicture').addEventListener('click', function(){
   	var video=document.getElementById("video");//获取id
   	let canvas=document.getElementById("canvass");
   	var ctx=canvas.getContext('2d');//类型是2d
   	canvas.width=video.videoWidth;//画布的宽度等于视频屏幕的宽度
   	canvas.height=video.videoHeight;
   	ctx.drawImage(video,0,0,video.videoWidth,video.videoHeight);//在画布上画画
   	document.getElementById("win").style.display="block";
   })
