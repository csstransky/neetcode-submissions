class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const createAnagramKey = (str: string): string => {
            return [...str].sort().toString();
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
