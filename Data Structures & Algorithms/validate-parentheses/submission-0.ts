class Solution {
    isOpenParen(char: string): boolean {
        return char === '('
            || char === '{'
            || char === '[';
    }
    isCloseParen(char: string): boolean {
        return char === ')'
            || char === '}'
            || char === ']';
    }
    areMatchingParens(paren1: string, paren2: string): boolean {
        return paren1 === '(' && paren2 === ')'
            || paren1 === ')' && paren2 === '('
            || paren1 === '{' && paren2 === '}'
            || paren1 === '}' && paren2 === '{'
            || paren1 === '[' && paren2 === ']'
            || paren1 === ']' && paren2 === '['
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const parenStack = [];
        for (const char of s) {
            if (this.isOpenParen(char)) {
                parenStack.push(char);
            } else if (this.isCloseParen(char)) {
                const openParen = parenStack.pop();
                if (!this.areMatchingParens(openParen, char)) {
                    return false;
                }
            } else {
                throw new Error("String includes unknown character, it should only include parentheses!")
            }
        }
        return parenStack.length === 0
    }
}
