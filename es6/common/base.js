 import $ from 'jquery'
 import _ from 'lodash'
 /**
  * 基类是用于此次项目必须要用的插件库
  */
 export default class base{
    constructor(props){
        this.id=props.id;
        this.name=props.name;
        this.contents=props.contents;
    }
 }