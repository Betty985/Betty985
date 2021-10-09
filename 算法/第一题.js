//哈希算法
var twoSum=(nums,target)=>{
    const map=new Map();
    for(let i=0;i<nums.length;i++){
        const complement=target-nums[i];
        // 用来检测是否存在指定元素的键值
        if(map.has(complement)){
            //返回指定键所映射的值
            return[map.get(complement),i];
        }else{
            //值为键值，下标为映射的值
            map.set(nums[i],i);
        }
    }
}
