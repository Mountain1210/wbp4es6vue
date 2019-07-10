
import css from "../common/css/base.css"
import index from "../common/css/index.css"
import less from "../common/css/indexless.less"
import mov from '../common/media/demo.mp4';
import screenshot from '../common/js/screenshot.js';

// import lodash from 'lodash'
// import jquery from "jquery";
// document.write('<div style="color:#F11">Welcome to AI World</div>')
console.log($)
// console.log(_)// console.log(screenshot)
// let obj={
// 	el:'screencontent',
// 	targetid:'video',
// 	movsrc:mov
// }
// screenshot(obj);
$('.tabchange li').click(function(){
		var num=$(this).index();
		$(this).addClass('check').siblings('li').removeClass("check");
        $('.tablecontent').eq(num).show().siblings('.tablecontent').hide();
})

// document.getElementById('btnCatchPicture').addEventListener('click', function(){
// 	   	var video=document.getElementById("video");//获取id
// 	   	let canvas=document.getElementById("canvass");
// 	   	var ctx=canvas.getContext('2d');//类型是2d
// 	   	canvas.width=video.videoWidth;//画布的宽度等于视频屏幕的宽度
// 	   	canvas.height=video.videoHeight;
// 	   	ctx.drawImage(video,0,0,video.videoWidth,video.videoHeight);//在画布上画画
// 	   	document.getElementById("win").style.display="block";
// 	})
$('.jcbtn').click(function(){
	var video=document.getElementById("video");//获取id
	var canvas = document.createElement("canvas");
		canvas.width = video.videoWidth;;
		canvas.height = video.videoHeight;
		canvas.getContext("2d").drawImage(video,0,0,video.videoWidth,video.videoHeight);
		var image = new Image();
		image.src = canvas.toDataURL("image/png");
		$('#imgid').append(image)
		$(this).parent().hide();
		$(this).parents('li').find('.load').show()
		return image;
})