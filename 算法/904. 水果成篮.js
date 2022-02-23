// 你正在探访一家农场，农场从左到右种植了一排果树。这些树用一个整数数组 fruits 表示，其中 fruits[i] 是第 i 棵树上的水果 种类 。

// 你想要尽可能多地收集水果。然而，农场的主人设定了一些严格的规矩，你必须按照要求采摘水果：

// 你只有 两个 篮子，并且每个篮子只能装 单一类型 的水果。每个篮子能够装的水果总量没有限制。
// 你可以选择任意一棵树开始采摘，你必须从 每棵 树（包括开始采摘的树）上 恰好摘一个水果 。采摘的水果应当符合篮子中的水果类型。每采摘一次，你将会向右移动到下一棵树，并继续采摘。
// 一旦你走到某棵树前，但水果不符合篮子的水果类型，那么就必须停止采摘。
// 给你一个整数数组 fruits ，返回你可以收集的水果的 最大 数目。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/fruit-into-baskets
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    // 一个大篮子，里面有两种水果
   const map =new Map();
   let j=0;
   let max=1;
  for(let i=0;i<fruits.length;i++){
    //   i是水果最后一次出现的位置
      map.set(fruits[i],i)
    //   篮子里出现了第三种水果
      if(map.size>2){
          let minIndex=fruits.length-1;
        //   如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
        // for...in语句以任意顺序遍历一个对象的除Symbol以外的可枚举属性，包括继承的可枚举属性。
        // 
          for(const [fruit,index] of map){
              if(index<minIndex)
              minIndex=index
          }
              map.delete(fruits[minIndex])
      j=minIndex+1;
      }
  
      max=Math.max(max,i-j+1)
  }
return max
};
