export interface BooleanSoft {
    soft: {
        be(expectedValue: boolean): void;
        beTrue(): void;
        beFalse(): void;
        not: {
            be(expectedValue: boolean): void;
            beTrue(): void;
            beFalse(): void;
        }
    }
}