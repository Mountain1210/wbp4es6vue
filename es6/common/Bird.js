import Animal from './Animal'

 export default  class Bird extends Animal{
            //构造函数
            constructor(props){
               //调用实现父类的构造函数
                super(props);
                this.type=props.type||"未知";
            }

            fly(){
                alert(this.name+"在飞...");
            }
        }