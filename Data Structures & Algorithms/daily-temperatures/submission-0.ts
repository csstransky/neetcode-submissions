class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const indexStack = [];
        const results = Array(temperatures.length).fill(0);

        temperatures.forEach((temperature, currentIndex) => {
            const stackTemp = temperatures[currentIndex];

            while (indexStack.length > 0 && temperature > temperatures[indexStack[indexStack.length - 1]]) {
                const lastIndex = indexStack.pop();
                results[lastIndex] = currentIndex - lastIndex;
            }
            indexStack.push(currentIndex);
        });

        return results;
    }
}
