(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[,function(e,t,n){e.exports=n.p+"media/demo.ee87962.mp4"},function(e,t,n){"use strict";(function(t){e.exports=function(e){var n=['<video id="video" controls>','<source src="" type="video/mp4">',"</video>",'<button id="btnCatchPicture">截图</button>','<span id="win">','<canvas id="canvass"></canvas>',"</span>"].join("");t("#"+e.el).append(n),document.getElementById(e.targetid).src=e.movsrc,document.getElementById("btnCatchPicture").addEventListener("click",function(){var e=document.getElementById("video"),t=document.getElementById("canvass"),n=t.getContext("2d");t.width=e.videoWidth,t.height=e.videoHeight,consolasdfe.logg("da"),n.drawImage(e,0,0,e.videoWidth,e.videoHeight),document.getElementById("win").style.display="block"})}}).call(this,n(0))},,function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}i(n(10)),i(n(1)),i(n(2))},,,,,,function(e,t){}],[[4,0,1]]]);