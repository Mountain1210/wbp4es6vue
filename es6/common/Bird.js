import Animal from './Animal'

 export default  class Bird extends Animal{
            //���캯��
            constructor(props){
               //����ʵ�ָ���Ĺ��캯��
                super(props);
                this.type=props.type||"δ֪";
            }

            fly(){
                alert(this.name+"�ڷ�...");
            }
        }