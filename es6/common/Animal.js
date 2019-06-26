

 export default  class Animal{
            //构造函数
            constructor(props){
                this.name=props.name||'未知';
            }

            eat(){
                alert(this.name+"在吃东西...");
            }
        }