export interface NumberSoft {
    soft: {
        be(expectedValue: number): void;
        beLessThan(expectedValue: number): void;
        beLessThanOrEqual(expectedValue: number): void;
        beGreaterThan(expectedValue: number): void;
        beGreaterThanOrEqual(expectedValue: number): void;
        beApproximately(expectedValue: number, tolerance: number): void;
        beBetween(min: number, max: number): void;
        beNegative(): void;
        bePositive(): void;
        beInteger(): void;
        beEven(): void;
        beFinite(): void;
        beNaN(): void;
        not: {
            be(expectedValue: number): void;
            beLessThan(expectedValue: number): void;
            beLessThanOrEqual(expectedValue: number): void;
            beGreaterThan(expectedValue: number): void;
            beGreaterThanOrEqual(expectedValue: number): void;
            beApproximately(expectedValue: number, tolerance: number): void;
            beBetween(min: number, max: number): void;
            beNegative(): void;
            bePositive(): void;
            beInteger(): void;
            beEven(): void;
            beFinite(): void;
            beNaN(): void;
        }
    }
}