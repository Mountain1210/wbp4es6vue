/* 
* @Author: wangwei
* @Date:   2018-01-22 09:41:50
* @Last Modified time: 2018-01-23 10:10:48
*/
import Base from '../common/base'

export default  class Person extends Base{
  constructor(props){
     super(props);
      this.init();
  }
  insertBody(){

    $('body').html('<span style="color:red">我的编号应该是</span>'+this.id+"我的名字叫"+this.name+"在"+this.contents+"工作")
  }

  init(){
    this.insertBody();

    $('span').click(function(event) {
        alert($(this).html())
    });
  }
}