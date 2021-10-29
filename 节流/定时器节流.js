//节流 核心在时间间隔，可以使用setTimeout或Date对象 
//触发事件 执行任务设置时间间隔
//时间间隔内有触发行为就取消掉任务
//时间间隔后有触发行为，就再次执行任务和设置时间间隔
function coloring() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  //字符串插值是反引号包起来的
  document.body.style.background = `rgb(${r},${g},${b})`;
}
//节流函数需要两个参数：执行函数，间隔时间
function throttle(func,delay){
    let timer;
    return function(){
        let context=this;
        let arg=argument;
         if(timer){
                return;
            }
        timer=setTimeout(function(){     
            func.apply(context,arg);
            //没有任务或者已经执行完了
            timer=null;
        },delay);
    }
}
window.addEventListener("resize", throttle(coloring,2000));
