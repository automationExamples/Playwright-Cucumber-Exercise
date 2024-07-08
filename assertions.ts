import { Page } from "playwright";
import Log from "./Log";
import { expect } from "playwright/test";

export async function assertEquals(expected: string, actual: string) {
    Log.info(`Asserting that the expected value : ${expected} is equal to the actual value : ${actual}`);
    try {
        expect(actual).toBe(expected);
        Log.info(`Expected value : ${expected} is equal to the actual value : ${actual}`);
    }
    catch (error) {
        Log.error(`Expected value : ${expected} is not equal to the actual value : ${actual}`);
        throw new Error(`Expected value : ${expected} is not equal to the actual value : ${actual}`);
    } 
}

export async function assertContains(expected: string, actual: string) {
    Log.info(`Asserting that the expected value : ${expected} is contained in the actual value : ${actual}`);
    try {
        expect(actual).toContain(expected);
        Log.info(`Expected value : ${expected} is contained in the actual value : ${actual}`);
    }
    catch (error) {
        Log.error(`Expected value : ${expected} is not contained in the actual value : ${actual}`);
        throw new Error(`Expected value : ${expected} is not contained in the actual value : ${actual}`);
    } 
}

export async function assertArrayEquals(expected: { name: string; price: number; }[], actual: { name: string; price: number; }[]) {
    Log.info(`Asserting that the expected array : ${JSON.stringify(expected)} is equal to the actual array : ${JSON.stringify(actual)}`);
    try {
        expect(actual).toEqual(expected);
        Log.info(`Expected array : ${JSON.stringify(expected)} is equal to the actual array : ${JSON.stringify(actual)}`);
    }
    catch (error) {
        Log.error(`Expected array : ${JSON.stringify(expected)} is not equal to the actual array : ${JSON.stringify(actual)}`);
        throw new Error(`Expected array : ${JSON.stringify(expected)} is not equal to the actual array : ${JSON.stringify(actual)}`);
    }  
}

