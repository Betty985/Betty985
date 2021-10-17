window.onload = function hi() {
  let one = document.querySelector("input");
  let two = document.querySelector("#two");
  obj = { val: "" };
  //   访问器属性
  Object.defineProperty(obj, "val", {
    get: function () {
      one.value = two.innerText;
      return one.value;
    },
    set: function (newVal) {
      one.value = two.innerText = newVal;
    },
  });

  one.addEventListener("input", () => {
    obj.val = one.value;
    two.innerText = obj.val;
    console.log(obj.val);
  });
  two.addEventListener("input", () => {
//     一个好玩的bug，如果有这行代码，第二框自动从右向左输入，我还不知道为什么……
    // obj.val = two.innerText;
    one.value = obj.val;
  });
};
