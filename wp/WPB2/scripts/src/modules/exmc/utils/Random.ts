export default class Random {
    seed: number;
    static MAX_VALUE = 2 ** 32 - 1;
    constructor(seed?: number) {
        this.seed = (seed || Date.now()) % 999999999;
    }
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        let val = this.seed / 233280.0;
        return val;
    }
    nextDouble() {
        return this.next();
    }
    nextLong() {
        return Math.floor(this.nextDouble() * Random.MAX_VALUE);
    }
    nextInt() {
        return Math.floor(this.nextDouble() * Random.MAX_VALUE);
    }
}