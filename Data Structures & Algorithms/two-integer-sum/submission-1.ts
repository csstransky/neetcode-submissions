class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsIndexMap = new Map();
        for (let ii = 0; ii < nums.length; ii++) {
            const num = nums[ii];
            const diff = target - num;
            if (numsIndexMap.has(diff)) {
                const index = numsIndexMap.get(diff);
                return [index, ii];
            }
            numsIndexMap.set(num, ii);
        }
        return [];
    }
}
