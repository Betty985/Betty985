// 文件操作——文件信息
function fi(){
    // 获取filelist对象
var ofile=document.getElementById("ff");
ofile.onchange=function(){
var file=ofile.files[0];
console.log("文件名称："+file.name);
console.log("文件类型："+file.type);
//    文件大小转化
console.log("转化前的文件大小："+file.size+" B");
// 将B转化为KB
var size=file.size/1024;
var unitArr=["KB","MB","GB","TB"];
for(let i=0;size>1;i++){
// toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
var fs=size.toFixed(2)+unitArr[i];
size/=1024;
}
console.log("转化后的文件大小："+fs);
console.log("最后修改时间："+file.lastMotifiedDate);


}
ofile.onchange();
}        
// 文件操作——文件预览
// 读取文件
function fr(){
    var ofr=document.getElementById("ff");
    var fileShow=document.getElementById("fileShow");
    var file=ofr.files[0];
    //    读取本地文件，以GBK编码方式输出
    var reader= new FileReader();
    // readAsText()方法有两个参数：File对象和文本的编码方式，默认值为“utf-8”。
   if(file.type=="text/plain"){
    reader.readAsText(file,"gbk");
    reader.onload=function(){
        console.log(this.result);
        // 文件在网站上显示，然后消失（没有实现）
        // var txtPre=document.createElement("p");
        // txtPre.innerHTML=this.result;
        // document.body.appendChild(txtPre);
        // document.body.removeChild(P);
    //    setTimeout("document.body.removeChild(P);",100)
    }
   }
//    在线预览图片，readAsDataURL()
   else if(file.type=="image/jpeg"||"image/jpg"||"image/png"||"image/gif"){
     reader.readAsDataURL(file);
     reader.onload = function(){
        //  添加图片到页面中
        var oImg = document.createElement("img");
        oImg.src = this.result;
        oImg.style.width="100px";
        fileShow.appendChild(oImg);
     }
   } 
   else console.log("不支持查看的类型");
 }          
// 创建下载链接
function loadUrl(){
    var oTxt = document.getElementById("txt");
    var lBtn = document.getElementById("lBtn");
    var oDiv = document.getElementById("lUrl");
    lBtn.onclick = function(){
        var text = oTxt.value;
        var blob = new Blob([text],{type:"text/plain"});
        // 通过createObjectURL()创建文字链接
        oDiv.innerHTML = '<a download= "这是它的新名字" href="'+window.URL.createObjectURL(blob)+'" target="_blank">下载文件</a>'
    }
}
// 改进版创建下载链接
function imDownload(){
    var imTxt = document.getElementById("imTxt");
    var imBtn = document.getElementById("imBtn");
    imBtn.onclick = function(){
       //  Blod中的数据为“文字”，默认编码“utf-8”
       var imtext = imTxt.value;
       var imblob = new Blob([imtext],{type:'text/plain'});
       // 通过createObjectURL()方法创建文字链接
       var oa =document.createElement("a");
       var imurl = window.URL.createObjectURL(imblob);
       oa.download = "这是它的新名字";
       oa.href = imurl;
       // 添加元素
       document.body.appendChild(oa);
       oa.style.color="green";
       // 触发点击
       oa.click();
       // 移除元素
       document.body.removeChild(oa);
    }
}
//留言板功能 
    //   账号和密码
    function ls(){
        var oUser = document.getElementById("user");
        var oPwd = document.getElementById("pwd");
        var lsbtn = document.getElementById("lsbtn");
        var lsmes = document.getElementById("lsmes");
        // 页面打开就使用getItem()方法获取数据
        // lsmes.innerHTML = "账号："+localStorage.getItem("user")+"<br>密码："+localStorage.getItem("pwd");
        // 点击按钮后，使用setItem()方法设置数据
        // sessionStorage暂时保存客户端的少量数据
        lsbtn.onclick = function(){
            sessionStorage.setItem("user",oUser.value);
            sessionStorage.setItem("pwd",oPwd.value);
            // lsmes.innerHTML="账号："+oUser.value+"<br>密码："+oPwd.value;
            console.log("账号："+oUser.value);
            console.log("密码："+oPwd.value);
        }
    }
    
    // 留言板核心
  function mb(){
    var llist = document.getElementById("llist");
    var ltxt = document.getElementById("ltxt");
    var lbtn = document.getElementById("lbtn");
    var lcbtn = document.getElementById("lcbtn");
    lbtn.onclick = function(){
        // 生成随机4位数，作为key
        var strkey = "";
        for(let i=0;i<4;i++){
            // math.floor(x)返回小于参数x的最大整数,即对浮点数向下取整。x[]的取值。[1]
            // Math.random()方法返回大于等于 0 小于 1 的一个随机数。
            strkey += Math.floor(Math.random()*(9+1));
        }
        // 获取文本框的值，作为value
        var strValue = ltxt.value;
        // 调用setItem()设置数据
        localStorage.setItem(strkey,strValue);
        // 插入数据到ul中
        var lli = document.createElement("li");
        var llitxt = document.createTextNode(strkey+":"+strValue);
        lli.appendChild(llitxt);
        llist.appendChild(lli);
    }
    lcbtn.onclick=function(){
        localStorage.clear();
        llist.innerHTML="";
    }
    // 页面载入时，读取数据并添加到页面中
    for ( let i=0;i<localStorage.length;i++){
        var strkey = localStorage.key(i);
        var strValue = localStorage.getItem(strkey);
        var lli = document.createElement("li");
        var llitxt = document.createTextNode(strkey+":"+strValue);
        lli.appendChild(llitxt);
        llist.appendChild(lli);
    }
  }  
// 数据库
// 创建数据库
// var request = window.indexedDB.open("myindexedDB1",1.0);
// request.onerror = function(){
//     console.log("创建数据库失败！");}
// request.onsuccess = function(e){
//     console.log("创建数据库成功！");
//     // e.target.result获取的是一个IDBDatabase对象。通过IDBDatabase对象，我们可以获取数据库的各种信息如数据库名、版本号等
//     var db = e.target.result;
//     console.log(db);
// }
// var oprequest = window.indexedDB.open("myindexedDB",2.0);
// 更新版本号以触发onupgradeneeded事件
// oprequest.onerror = function(){
//     console.log("打开数据库失败！");}
// oprequest.onsuccess = function(e){
//     console.log("打开数据库成功！");
    // e.target.result获取的是一个IDBDatabase对象。通过IDBDatabase对象，我们可以获取数据库的各种信息如数据库名、版本号等
    // var db = e.target.result;
    // console.log(db);
    // 定义新的数据
    // var new1=[{id:105,name:"丽丽"},{id:106,name:"思思"}];
    // // 开启事务
    // var transaction = db.transaction(["objectStore"],"readwrite");
    // // 连接对象仓库
    // var store = transaction.objectStore("objectStore");
    // // 添加新数据
    // for(let i= 0;i<new1.length;i++){
    //     var dataRequest = store.add(new1[i]);
    //     dataRequest.onerror = function(){
    //         console.log("添加数据失败!");
    //     }
    //     dataRequest.onsuccess = function(){
    //         console.log("添加数据成功!");
    //     }
    // }
    // 删除对象仓库的数据
    // // 开启事务
    // var deltransaction= db.transaction(["objectStore"],"readwrite");
    // // 连接对象仓库
    // var dstore=deltransaction.objectStore("objectStore");
    // var dreq=dstore.delete(004);
    // dreq.onerrror = function(){
    //     console.log("删除数据失败！");
    // }
    // dreq.onsuccess = function(){
    //     console.log("删除数据成功！");
    // }
    // 查找对象仓库的数据
//     var gtransaction = db.transaction(["objectStore"],"readwrite");
//     var gstore = gtransaction.objectStore("objectStore");
//     var greq = gstore.get(002);
//     greq.onerror=function(){alert("查找数据失败！")};
//     greq.onsuccess=function(){if(this.result==undefined) console.log("没有符合条件的数据。"); else {console.log(this.result);}}
// }
// oprequest.onupgradeneeded = function(e){
//     var db = e.target.result;
//     // 数据仓库的数据
//     var data = [{id:001 ,name:"泡泡"},{id:002 ,name:"娃娃"},{id:003 ,name:"天天"},{id:004 ,name:"悠悠"}];
//     //如果数据库不包含该对象仓库，则创建新的对象仓库
//     if(!db.objectStoreNames.contains("objectStore")){
//        var store = db.createObjectStore("objectStore",{keyPath:"id"});
//        for(let i = 0;i<data.length;i++){
//            var addRequest = store.add(data[i]);
//            addRequest.onerror = function(){
//                console.log("添加数据失败");
//            }
//            addRequest.onsuccess = function(){
//                 console.log("添加数据成功");
//            }
//        }
//     } 
// 更新对象仓库的数据
// var ptransaction = db.transaction(["objectStore"],"readwrite");
// var pstore = ptransaction.objectStore("objectStore");
// var value =[{id:101 ,name:"泡泡糖"},{id:106 ,name:"明明"}]
// for(let i=0;i<value.length;i++)
//     {
//        var preq =pstore.put(value[i]);
//        preq.onerror = function(){console.log("更新数据失败。");}
//        preq.onsuccess = function(){console.log("更新数据成功！");}
//     }
// 清空对象仓库
// var ctransaction = db.transaction(["objectStore"],"readwrite");
// var cstore = ctransaction.objectStore("objectStore");
// var creq = cstore.clear();
// creq.onerror = function(){console.log("清除对象仓库失败！");}
// creq.onsuccess= function(){console.log("清除对象仓库成功！");}
// }
// 删除数据库
// var delrequest = window.indexedDB.deleteDatabase("myindexedDB1");
// delrequest.onerror = function(){
//     console.log("删除数据库失败！");
// }
// delrequest.onsuccess = function(){
//     console.log("删除数据库成功！");
// }
// 计数器
     window.onload = function(){
        if( sessionStorage.count) {
            sessionStorage.count = Number( sessionStorage.count)+1;}
       else  sessionStorage.count=1;
       var counter = document.getElementById("counter");
      //  alert("网站访问量为 "+ sessionStorage.count+" 次")
       counter.innerHTML="网站访问量为"+ sessionStorage.count+"次";}
  
     
// 视频
   var oVideo = document.getElementsByTagName("video")[0];
   var oPlay = document.getElementById("play");
   var oAdd = document.getElementById("add");
   var oRed = document.getElementById("reduce");
   var oMut = document.getElementById("muted");
   var oSlow = document.getElementById("slow");
   var oFast = document.getElementById("fast");
   var oRange = document.getElementById("v-range");
   var oCut = document.getElementById("currentTime");
   var oDur = document.getElementById("duration");
   var play=0;
   var flag=1;
   oPlay.onclick=function(){ if(play==1){oVideo.play();oPlay.value="暂停";play=0;}else{oVideo.pause();oPlay.value="播放";play=1;}}
   oAdd.onclick=function(){oVideo.volume+=0.2;}
   oRed.onclick=function(){oVideo.volume-=0.2;}
   oMut.onclick=function(){if(flag==1){oVideo.muted=true; oMut.value="开启"; flag=0;}else{oVideo.muted=false; oMut.value="静音"; flag=1;}}
   oSlow.onclick=function(){oVideo.playbackRate-=0.2;}
   oFast.onclick=function(){oVideo.playbackRate+=0.2;}
//    console.log(oVideo.playbackRate) 
    // 进度条的最大值，最小值和当前值
    oRange.max=oVideo.duration;
    oRange.min=0;
    oRange.value=0;
    //在视频的元数据加载后执行的事件
    oVideo.addEventListener('loadedmetadata',()=>{
        // 初始化显示时间
        oCut.innerHTML="00:00:00";
        oDur.innerHTML=getTime(oVideo.duration);
})
     // 调整时间格式的函数
    function getTime(time){
        var h=parseInt(time/3600);
        var m=parseInt((time-h*3600)/60);
        var s=parseInt(time-h*3600-m*60);
        if(h<10) h=""+h;
        if(m<10) h=""+h;
        if(s<10) h=""+h;
        var result=h+":"+m+":"+s+"";
        return result;
    }
    // 滑动条改变的事件
    oRange.onchange=function(){
       oVideo.currentTime=oRange.value;
       oCut.innerHTML=getTime(oVideo.currentTime);
    }
    // 触发oVideo的timeupdate事件  除下面的方法外也可以用addEventListener("timeupdate",function(){},false)
    // oVideo.ontimeupdate=function(){oRange.value=oVideo.currentTime;}
   oVideo.addEventListener("timeupdate",function(){oRange.value=oVideo.currentTime;
    oCut.innerHTML=getTime(oVideo.currentTime);},false);
    // 
    

