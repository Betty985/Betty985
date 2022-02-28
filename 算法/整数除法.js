// 给定两个整数 a 和 b ，求它们的除法的商 a/b ，要求不得使用乘号 '*'、除号 '/' 以及求余符号 '%' 。

 

// 注意：

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231, 231−1]。本题中，如果除法结果溢出，则返回 231 − 1

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/xoh6Oh
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function(a, b) {
let max=2**31-1;
let min=0-2**31;
if(a==min&&b==-1) return max
if(a==min&&b==1) return min
// 相同是0，不同是1
const sign=(a>0)^(b>0)
a=Math.abs(a);
b=Math.abs(b);
let n=0
for (let i=31;i>=0;i-- ){
    if(a>>>i>=b){
        a-=b<<i;
        n+=1<<i
    }
}
return sign ? 0-n:n
};
    

