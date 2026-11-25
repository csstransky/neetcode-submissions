class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numsCountMap: Map<number, number> = new Map();
        nums.forEach((num) => {
            const newCount = (numsCountMap.get(num) ?? 0) + 1;
            numsCountMap.set(num, newCount);
        });

        const numsCountArray: number[][] = Array.from(numsCountMap.entries());
        const results: number[] = numsCountArray
            .sort(([, value1], [, value2]) => value2 - value1)
            .map(([key]) => key);
        results.length = k;

        return results;
    }
}
