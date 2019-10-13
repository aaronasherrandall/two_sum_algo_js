/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
// nums = [2, 7, 11, 15];
// target = 9;


var twoSum = function(nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++){
        const currentValue = nums[i]
        const neededValue = target - currentValue
        const index2 = previousValues[neededValue]
        if (index2 != null) {
            return [previousValues[neededValue], i]
        } else {
            previousValues[currentValue] = i
        }
    }
};