/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
   let map=new Map();
   const result=[];
//    初始指针
   let i=0;
   while(i<=s.length-10){
     const dna=  s.substring(i,i+10);
     if(!map.has(dna))//可以写成（map.get(dna)===undefinded)
     map.set(dna,1)
     else if(map.get(dna)===1)
    {
     map.set(dna,2)
     result.push(dna)
    } 
    else{
        map.set(dna,map.get(dna)+1)
    }
    i++
   }
   return result
};
/**
滑窗问题，可以用两个set
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
   let set=new Set();
   const result=new Set();
//    初始指针
   let i=0;
   while(i<=s.length-10){
     const dna=  s.substring(i,i+10);
     if(set.has(dna))//可以写成（map.get(dna)===undefinded)
     result.add(dna)
    else{
        set.add(dna)
    }
    i++
   }
   return Array.from(result)
};
/**
滑窗问题，可以用两个set
 */
https://leetcode-cn.com/problems/repeated-dna-sequences/
