// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function(s1, s2) {
    if(s1.length!=s2.length) {return false;}
    // Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
    let a=Array.from(s1);
    let b=Array.from(s2);
    // sort() 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的
    // join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
    if(a.sort().join("")==b.sort().join("")) {return true;}
    else return false;
    // includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
};
