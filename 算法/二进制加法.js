// 给定两个 01 字符串 a 和 b ，请计算它们的和，并以二进制字符串的形式输出。

// 输入为 非空 字符串且只包含数字 1 和 0。
// https://leetcode-cn.com/problems/JFETK5/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
   let result=[];
   let i=a.length-1;
   let j=b.length-1;
   let carry=0
   while(i>=0||j>=0){
    //    如果其中一个字符串已经遍历完了，前面补0
    // -0是为了转换成数字
       let digitA=i>=0?a.charAt(i--)-'0':0;
       let digitB=j>=0?b.charAt(j--)-'0':0;
       let sum=digitA+digitB+carry
    //    进位
       carry=sum>=2?1:0;
    //    该位的值
       sum=sum>=2?sum-2:sum
       result.unshift(sum)
   }
   if(carry==1)result.unshift(1)
//    正则全局搜索
   return result.toString().replace(/,/g,"")
};
