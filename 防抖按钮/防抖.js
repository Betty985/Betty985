//JavaScript 防抖
// 执行函数 清除定时 设置定时
//规定时间内触发事件，清除定时，设置定时。没有触发，执行函数。
const button=document.querySelector("input");
function cli(){
    console.log("你点击了按钮");
}
function debounce(func,delay){
    //利用作用域链和闭包使独立的函数产生联系
    //每次清除的都是上一次的延时
    let timer;
    let context=this;
   let args=arguments;
    //高阶函数：一个函数接收另一个函数作为参数或返回一个函数作为结果。
    return function(){
       clearTimeout(timer);
       timer= setTimeout(function(){
           //在 JavaScript 严格模式下，如果 apply() 方法的第一个参数不是对象，则它将成为被调用函数的所有者（对象）。
           //在“非严格”模式下，它成为全局对象
          func.apply(context,args);
       },delay);
    }
    
}
button.addEventListener('click',debounce(cli,2000));
