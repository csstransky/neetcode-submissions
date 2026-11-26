class MinStack {
    private numStack: number[];
    private minStack: number[];

    constructor() {
        this.numStack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.numStack.push(val);
        const minNum = this.minStack[this.minStack.length - 1] ?? Number.MAX_SAFE_INTEGER;
        this.minStack.push(val < minNum ? val : minNum);
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.numStack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.numStack[this.numStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
