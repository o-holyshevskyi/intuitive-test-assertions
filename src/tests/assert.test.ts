import { describe, test } from '@jest/globals';
import '../assertion/intuitive-assertion';

describe('test for boolean assertion', () => {
    test('beTruth', () => {
        const bool = true;

        bool.must().beTruth();
    });

    test('beFalse', () => {
        const bool = false;

        bool.must().beFalse();
    });

    test('negative beTruth', () => {
        const bool = false;

        try {
            bool.must().beTruth();
        } catch (e) {
            console.log(e);
        }
    });

    test('negative beTruth', () => {
        const bool = true;

        try {
            bool.must().beFalse();
        } catch (e) {
            console.log(e);
        }
    });
});
