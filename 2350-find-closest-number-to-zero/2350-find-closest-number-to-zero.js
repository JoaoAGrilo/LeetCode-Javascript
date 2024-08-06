/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    maisProximo = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(maisProximo)) {
            maisProximo = nums[i]
        }
    }

    if (nums.includes(Math.abs(maisProximo))) {
        return Math.abs(maisProximo)
    } else {
        return maisProximo
    }
};