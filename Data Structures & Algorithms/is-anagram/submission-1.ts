class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false;
        }

        const numsAmountMap = [...s].reduce((map, letter) => {
            map[letter] = !map[letter] ? 1 : map[letter] + 1;
            return map;
        }, {});

        for (let letter of [...t]) {
            if (numsAmountMap[letter] <= 0) {
                return false;
            }
            numsAmountMap[letter] -= 1;
        }

        return Object.values(numsAmountMap).every((num) => num === 0);
    }
}
