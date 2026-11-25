class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsAmountMap = new Map();
        for (let num of nums) {
            if (numsAmountMap.get(num)) {
                return true;
            }
            numsAmountMap.set(num, 1);
        }
        return false;
    }
}
