// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
      const mappings=new Map();
    //   括号配对情况
      mappings.set("(",")");
      mappings.set("[","]");
      mappings.set("{","}");
    //   数组栈
      const stack=[];
    //   for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句————————MDN
      for(let i of s){
//         判断当前元素是否为左括号
          if(mappings.has(i)) {
             stack.push(mappings.get(i));
          }else{
              if(stack.pop()!==i){
                  return false;
              }
          }
      }
      if(stack.length!==0){
          return false;
      }
      return true;
};
