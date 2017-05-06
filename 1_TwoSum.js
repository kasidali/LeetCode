/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++){
        for(var j=1;j<=nums.length-i;j++){
            if(nums[i]+nums[i+j]==target){
                var number = [i,i+j];
                return number;
            }
        }
    }
};/**
 * Created by kasidali on 2017/5/6.
 */
