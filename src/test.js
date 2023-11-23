// 类的首字母需要大写
// constructor是定义个构造函数：
// 属性和方法都可以从父类中继承过来！！通过定义类时，用extends.这是比较重要的特性：
class Person{
    constructor(name){
        this.name = name;
    }
}
class Student extends Person {
    // name和score是形参，调用函数需要传进来的参数
    // this表示用Student class创建出来的实例
    constructor(name,score){
        // 通过super这样关键字来执行父类的构建函数。
        super(name);
        this.score = score;
    }
    introduce(){
        // 反引号才能成引用变量？
        console.log(`我是${this.name},考了${this.score}分。`)
    }
}
const student = new Student('zhangsan',99)
console.log('student',student)
student.introduce();



const p1 = new Promise(function(resolve, reject)){
    setTimeout(function(){
        let data="数据库的用户数据";
        resolve(data);
    },1000);
});