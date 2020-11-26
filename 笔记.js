//解构
const obj = {
    name: 'kobe',
    age: 30
}
const { name, age } = obj;
//数组的解构
const names = ['why', 'kobe', 'james']
const [name1, name2, name3] = names
//timeout 超时的意思是请求过去规定时间没有收到就报错
//post传递是是数据 data
//get是参数 param
/*
1.app.message修改数据 vue内部如何监听message发生改变
object.defineProperty 来监听对象属性的改变
2.当数据发生改变时 vue是如何知道要通知哪些人 界面发生刷新
发布订阅者模式
*/