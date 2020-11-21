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
//get是参数 params