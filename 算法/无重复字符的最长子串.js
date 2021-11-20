// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set =new Set();
    let i=0,
    j=0,
    max=0;
    if(s.length) max=0;
    for(i;i<s.length;i++){
        if(!set.has(s[i])){
            set.add(s[i]);
            max=Math.max(set.size,max);
        }
        else{
            while(set.has(s[i])){
                set.delete(s[j]);
                j++;
            }
            set.add(s[i]);
        }
    }
    return max;
};
