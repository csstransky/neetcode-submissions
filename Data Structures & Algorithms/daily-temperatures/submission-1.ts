class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const indexStack = [];
        const results = Array(temperatures.length).fill(0);

        temperatures.forEach((temperature, currentIndex) => {
            let stackTemp = temperatures[indexStack[indexStack.length - 1]];

            while (indexStack.length > 0 && temperature > stackTemp) {
                const lastIndex = indexStack.pop();
                results[lastIndex] = currentIndex - lastIndex;
                stackTemp = temperatures[indexStack[indexStack.length - 1]];
            }
            indexStack.push(currentIndex);
        });

        return results;
    }
}
