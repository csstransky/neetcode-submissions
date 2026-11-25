class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const createAnagramKey = (str: string): string => {
            const charCountArray = Array(26).fill(0);
            for (const char of str) {
                const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
                charCountArray[index] += 1;
            }
            return charCountArray.toString();
        };

        const anagramsMap: Map<string, string[]> = new Map();
        strs.forEach((str) => {
            const anagramKey = createAnagramKey(str);
            const anagramArray = anagramsMap.get(anagramKey);
            if (!anagramArray) {
                anagramsMap.set(anagramKey, [str]);
            } else {
                anagramArray.push(str)
            }
        });

        const result: string[][] = [];
        for (let [_key, anagram] of anagramsMap) {
            result.push(anagram);
        }
        return result;
    }
}
