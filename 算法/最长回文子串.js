// 给你一个字符串 s，找到 s 中最长的回文子串。
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length<2){
        return s;
    }
    let start=0,
    max=1;
    function expandAroundCenter(left,right){
        while(left>=0&&right<s.length&&s[left]===s[right]){
            if(right-left+1>max){
                max=right-left+1;
                start=left;
            }
            left--;
            right++;
        }
    }
    for(let i=0;i<s.length;i++){
        // 有中心点
        expandAroundCenter(i-1,i+1);
        // 没有中心点
        expandAroundCenter(i,i+1);
    }
    return s.substring(start,start+max)
};
