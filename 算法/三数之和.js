// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum
// // 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result=[];
    nums.sort((a,b)=>{return a-b;})
    // -2是为防止越界
    for(let i=0;i<nums.length-2;i++){
        // 避免重复
        if(i===0||nums[i]!==nums[i-1]){
            let start =i+1,
            end=nums.length-1;
            while(start <end){
               if(nums[i]+nums[start]+nums[end]===0){
                   result.push([nums[i],nums[start],nums[end]]);
                   start++;
                   end--;
                   while(start<end&&nums[start]===nums[start-1]){
                       start++;
                   }
                   while(start<end&&nums[end]===nums[end+1]){
                       end--;
                   }
               }else if(nums[i]+nums[start]+nums[end]<0){
                start++;
               }
               else{
                   end--;
               }
            }
        }
    }
    return result;
};
