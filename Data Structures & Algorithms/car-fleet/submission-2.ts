class Solution {
    getSortedFleet(
        position: number[],
        speed: number[]
    ): { position: number[]; speed: number[] } {
        const cars = position.map((carPosition, index) => ({
            position: carPosition,
            speed: speed[index]
        }));

        cars.sort(({ position: posA }, { position: posB }) => (
            posA - posB
        ));

        return {
            position: cars.map(({ position: carPosition }) => carPosition),
            speed: cars.map(({ speed: carSpeed }) => carSpeed)
        }
    }
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const { 
            position: sortedPosition,
            speed: sortedSpeed 
        } = this.getSortedFleet(position, speed);

        const fleetStack = [];

        for (let ii = sortedPosition.length - 1; ii >= 0; ii--) {
            const currPosition = sortedPosition[ii];
            const currSpeed = sortedSpeed[ii];
            const numTurns = (target - currPosition) / currSpeed;
            fleetStack.push(numTurns)

            const isCarCollide = fleetStack[fleetStack.length - 1] <= fleetStack[fleetStack.length - 2];

            if (fleetStack.length >= 2 && isCarCollide) {
                fleetStack.pop();
            }
        }

        return fleetStack.length;
    }
}
