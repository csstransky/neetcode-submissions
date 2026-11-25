class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        return strs.reduce((acc, str) => {
            return acc + str + "||"
        }, '');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let currentWord = '';
        const result = [];
        for (let ii = 0; ii < str.length; ii++) {
            const char = str[ii];
            if (char === '|' && str[ii + 1] === '|') {
                ii++;
                result.push(currentWord);
                currentWord = '';
            } else {
                currentWord = currentWord.concat(char);
            }
        }
        return result;
    }
}
