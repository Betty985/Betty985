var input = document.querySelector("#in");
var add = document.querySelector(".add");
var awi = document.querySelector("#wait");
var com = document.querySelector("#com");
var list = [];

function addp() {
  //   创建 <p> 元素
  let p = document.createElement("p");
  let i = document.createElement("i");
  let b = document.createElement("b");
  i.innerText = input.value;
  b.innerText = "  删除";
  b.addEventListener("click", function () {
    p.remove();
  });
  i.setAttribute("contenteditable", "true");
  p.appendChild(i);
  // 为 <p> 元素创建一个新的文本节点
  //   let item = document.createTextNode(input.value);
  //   添加属性
  p.setAttribute("class", "ap");
  //   p.setAttribute("contenteditable", "true");
  // 将文本节点添加到 <p> 元素中
  //   p.appendChild(item);
  let span = document.createElement("span");
  span.setAttribute("class", "mark");
  //   span.innerText = "";
  span.style.border = "1px solid black";
  span.style.width = "18px";
  //   将新元素添加到开始位置，可以使用 insertBefore() 方法:
  //   Node.insertBefore() 方法在参考节点之前插入一个拥有指定父节点的子节点。
  // var insertedNode = parentNode.insertBefore(newNode, referenceNode);
  p.insertBefore(span, i);
  p.appendChild(b);
  //   p.insertBefore(span, item);
  // 添加到已存在的元素中
  awi.appendChild(p);
  //   console.log(input.value);
  span.addEventListener("click", function () {
    span.innerText = "✔  ";
    com.appendChild(p);
  });
  //   清空输入框
  input.value = "";
}
// enter键添加
input.onkeydown = function (event) {
  var e = event || window.event || arguments.callee.caller.arguments[0];
  if (e && e.keyCode == 13) {
    addp();
  }
};
