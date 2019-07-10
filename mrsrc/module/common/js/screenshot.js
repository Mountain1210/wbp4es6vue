/**
 * 
 * @authors wangwei
 * @date    2019-07-08 11:39:18
 * @version 0.0.1
 */


var Screenshot = function(mediaobj){
	let screentemp=[
	  '<video id="video" controls>',
	  '<source src="" type="video/mp4">',
	  '</video>',
	  '<button id="btnCatchPicture">截图</button>',
	  '<span id="win">',
	  '<canvas id="canvass"></canvas>',
	  '</span>'
	].join('');
	$('#'+mediaobj.el).append(screentemp);
	document.getElementById(mediaobj.targetid).src = mediaobj.movsrc;
	document.getElementById('btnCatchPicture').addEventListener('click', function(){
	   	var video=document.getElementById("video");//获取id
	   	let canvas=document.getElementById("canvass");
	   	var ctx=canvas.getContext('2d');//类型是2d
	   	canvas.width=video.videoWidth;//画布的宽度等于视频屏幕的宽度
	   	canvas.height=video.videoHeight;
	   	ctx.drawImage(video,0,0,video.videoWidth,video.videoHeight);//在画布上画画
	   	document.getElementById("win").style.display="block";
	})
}
module.exports = Screenshot;
