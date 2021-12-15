// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//  动态规划
var canJump = function(nums) {
   const totalLength=nums.length;
//    初始化长度为数组长度，元素为0的数组
// 1代表此路通（能到达下一个下标） 0代表未知 -1代表此路不通
   const memo=Array(totalLength).fill(0);
//    数组的最后一个元素是可以到达下一个下标的
   memo[totalLength-1]=1;
   function jump(position){
    //    判断当前位置是否被标记过
    if(memo[position]===1){
        return true;
    }else if(memo[position]===-1){
        return false;
    }
    // 防止数组越界
    const maxJump=Math.min(position+nums[position],totalLength-1);
    for(let i=position+1;i<=maxJump;i++){
        const jumpResult=jump(i);
        if(jumpResult===true){
            memo[position]=1
            return true;
        }
    }
    memo[position]=-1;
    return false;
   }
   let result=jump(0);
   return result;
};
