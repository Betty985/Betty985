//实现一个算法，确定一个字符串 s 的所有字符是否全都不同。
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function(astr) {
let s=new Set(astr);
if(s.size==astr.length) return true;
else return false
 };
