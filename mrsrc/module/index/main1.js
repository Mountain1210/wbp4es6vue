import css from "./css/index.css"
import less from "./css/indexless.less"
var CLASS = require('./main2.js');
CLASS();


console.log($)
class ToastT
{
    constructor(){
        this.ToastDivId = 'toastDiv'
        this.confirmText = '确认';
        this.cancelText = '取消';
        this.msg = 'Toast';
        this._initStyle();
    };
    confirm(msg = 'Toast',options = {confirm:'确认',cancel:'取消'}){
        this.init(msg,options);
        return this;
    };
    alert(msg = 'Toast',options = {confirm:'确认',cancel:false}){
        this.init(msg,options);
        return this;
    };
    init(msg = 'Toast',options = {confirm:'确认',cancel:'取消'}){
        this.msg = msg;
        if(typeof options == 'object'){
            if(!(options.confirm === undefined)){
                this.confirmText = options.confirm;
            }
            if(!(options.cancel === undefined)){
                this.cancelText = options.cancel;
            }
        }else {
            console.error('options error ');
            return false;
        }
        this._initHtml();
        let div = document.createElement('div');
        div.id = this.ToastDivId;
        document.body.appendChild(div);
        document.getElementById(this.ToastDivId).innerHTML = this.html;
         if(!this.confirmText === false){
             this.btnConfirm()
         }
         if(!this.cancelText === false){
             this.btnCancel()
         }
        return this;
    };
    _initHtml(){
        let html = `<section style="`+ this.container +`" ><div style="` + this.toast + `"><span>` + this.msg + `</span><div style="` + this.btn + `" v-if="btnFlag">`;
        if(!(this.confirmText === false)) {
            html += `<button style="` + this.confirmStyle + `" id="ToastBtnConfirm">` + this.confirmText + `</button>`;
        }
        if(!(this.cancelText === false)){
            html += `<button style="`+ this.cancel +`" id="ToastBtnCancel">` + this.cancelText + `</button>`;
        }
        html += `</div></div></section>`;
        this.html = html;
    };
    _initStyle(){
        this.container = `position: absolute;left: 0;top: 0;bottom: 0;right: 0;z-index: 9999999;display: flex;justify-content: center;align-items: center;background: rgba(0,0,0,.2);`
        this.toast = `width: 23rem;height: 10rem;line-height: 10rem;text-align: center;background-color: #4e4b4a;border-radius: 10rem;color: #fff;`
        this.btn = `width: 23rem;height: 2rem;line-height: 2rem;margin: 1rem 0rem;`
        this.confirmStyle = `width: 4rem;height: 2rem;margin: 0rem 1rem;border-width:0;border-radius: 1rem;color: #fff;background-color: #5cb85c;border-color: #4cae4c;cursor: pointer;`
        this.cancel = `width: 4rem;height: 2rem;margin: 0rem 1rem;color: #fff;background-color: #f0ad4e;border-color: #f0ad4e;border-width:0;border-radius: 1rem;cursor: pointer;`
    };
    btnConfirm(confirm = ()=>{}){
        document.getElementById('ToastBtnConfirm').onclick = ()=>
        {
            document.getElementById(this.ToastDivId).remove();
            confirm();
        }
        return this;
    };
    btnCancel(cancel = ()=>{} ){
        document.getElementById('ToastBtnCancel').onclick = ()=>
        {
            document.getElementById(this.ToastDivId).remove();
            cancel();
        }
        return this;
    };
}
window.$Toast = new ToastT();





/**************************************************************************/
// var CLASS = require('./main2.js');
// CLASS();
// class component extends HTMLElement{
//     constructor(){
//         super(); 
//         this._data = {};
//         this._data.tabData = [];
//         this._data.index = 0;
        
//     };
//     /*
//     * begin 给自定义元素用setAttribute设置属性时
//     *必需要用static get observedAttributes -- 注册用setAttribute的属性
//     *和attributeChangedCallback配合使用--当使用setAttribute之后会自动调用该方法，
//     *在这个用getAttribute得到相应属性值
//     * 
//     */ 
//     static get observedAttributes() {
//         return ["tabData","index"];
//     };
//     attributeChangedCallback(){
//         try{
//             this._data.tabData = JSON.parse(this.getAttribute("tabData"));
//             this._data.index = this.getAttribute("index");
//         }catch(e){};
//         this.creatLis(); 
//     }; 
//     initData(){
//         //shadow不是<m-radio>中的子元素，它是一个容器，容器里的内容替换<m-radio>在html中的的
// //位置，我是把shadow当作一个document来看的，相当于在元素中也有一个document
//         let shadow = this.attachShadow({
//             mode: "open"
//         });
//     };
//     //创建tab元素
//     createTabDom(){
//         /* 创建选项卡dom结构 */
 
//         //创建div
//         let container = document.createElement("div");
//         container.classList.add("container");
        
//         let fragment = document.createDocumentFragment();
//         //创建ul
//         let ul = document.createElement("ul");
//         ul.classList.add("tabUl");
//         fragment.appendChild(ul);
//         container.appendChild(fragment);
//         this.shadowRoot.appendChild(container);
//         this.creatLis();   
//     };
    
// }
// class MyTab extends component{
//     constructor(){
//         super();
//         this.initData();
//         this.htmlStyle();
//         this.createTabDom();
//         this.createTabEvent();
 
//     };
//     //style样式
//     htmlStyle(){
//          /* style样式 */
//          let style = document.createElement("style");
//          style.textContent = `ul{
//              margin:0;
//              padding:0;
//          }
//          ul,li{
//              list-style: none;
//          }
//          li,div{
//              padding:0;
//          }
//          ul{
//              float: left;
//          }
//          li{
//              padding: 10px 20px; 
//              border: 1px solid #eeeeee;
//              float:left;
//              font-size: 14px;
//              cursor: pointer;
//              color: #666666;
//          }
//          li:hover{
//              color:#ffffff;
//              background: -webkit-linear-gradient(left,rgb(82, 211, 243),#eeeeee45,rgb(82, 211, 243));
//          }
//          .active{
//              color:#ffffff;
//              background: -webkit-linear-gradient(left,rgb(82, 211, 243),#eeeeee45,rgb(82, 211, 243));
//          }
//          .container{
//              overflow: auto;
//          }`;
         
//          this.shadowRoot.appendChild(style);
//     };
    
//     creatLis(){
       
//         //创建li
        
//         let tabData = this._data.tabData;
//         if(tabData.length > 0){
            
//             let lis = tabData.map((item,index) => {
//                 if(this._data.index === index.toString()){
//                     return `<li class="active" data-num="${index}">${item}</li>`
//                 }else{
//                     return `<li data-num="${index}">${item}</li>`
//                 }
//             }).join("");
//             let ul = this.shadowRoot.querySelector(".tabUl");
//             ul.innerHTML = lis;
            
//         }
        
       
//     };
//     createTabEvent(){
//         let me = this;
        
//         /* 绑定事件 */
//         this.shadowRoot.addEventListener("click",function(e){
//             if(e.target.tagName.toUpperCase() == "LI"){
//                 me._data.index = e.target.dataset.num;
//                 me.setAttribute("index", me._data.index);
//                 me.creatLis();
               
//                 //创建一个自己定义对象
//                 let changeEvent = new CustomEvent("change",{
//                     detail:{
//                         index: me._data.index
//                     }
//                 });
//                  //触发自定义事件
//                 me.dispatchEvent(changeEvent);
 
//             }
//         });
        
//         //this.shadowRoot.onclick this.shadowRoot不支持onclick这种绑定事件的方式（不支持dom0级的绑定方式）
//         /* this.shadowRoot.onclick = function(e){
//             console.log(e);
//             if(e.targe == 'li'){
//                 console.log(e);
                                
//             }
//         } */
//     }
// };
 
// customElements.define("my-tab",MyTab);


// let city = ["北京","上海","成都","重庆"];
//         let tab = document.querySelector('my-tab');//或者第一个控件<my-tab></my-tab>
//         tab.setAttribute("tabData",JSON.stringify(city));
// //动态的将数据传入组件中，用JSON的原因是setAttribute不接受复杂数据类型（对象，数组等）所以将这些转化成字符串，再在组件中用JSON转回来。
//         //tab.setAttribute("index",0);//动态的给自定义元素设置属性及属性值，必须在对应的类中加入attributeChangedCallback：当自定义元素的一个属性被增加、移除或更改时被调用
// 			//- 需要配合observedAttributes属性来监听指定的属性
	
// 	//static get observedAttributes() {return [要监听的属性列表] } 这两个方法
 
// //监听自定义事件
//         tab.addEventListener("change",function(e){
//             console.log(e.detail.index);
//         })