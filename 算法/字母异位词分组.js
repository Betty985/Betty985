// 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

// 字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母都恰好只用一次。

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 检查数组是否为空数组
    if(strs.length===0){
        return []
    }
    let map = new Map();
    // for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
    for( const str of strs){
        // 26个字母   统计字符串中每个字母出现的次数
       let arr = Array(26).fill(0);
       for (let i=0;i<str.length;i++){
           let ascii = str.charCodeAt(i) - 97;
           arr[ascii]++;
       }
    //    数组变成字符串     
    // 不能用空字符串，不然[0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]  [0,10,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]这种情况字符串是相等的
       let key = arr.join(" ");
       if(map.has(key)){
        //    map.set(key,map.has(key).push(str));
        // 扩展运算符   和上面效果一样
        map.set(key,[...map.get(key),str]);
       }else{
        //    值是只有一个字符串元素的数组
           map.set(key,[str])
       }
    }
    let result=[];
//    map.forEach(val=>result.push(val));
for(let arr of map){
    result.push(arr[1]);
}
    return result
};

