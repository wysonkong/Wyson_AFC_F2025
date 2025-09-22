let isPalindrome = require('../src/isPalindrome');


describe("isPalindrome", () => {

        test("Palindrome should return true", () => {
            expect(isPalindrome("racecar")).toBe(true);
        });

        test("Should return true with punctation", () => {
            expect(isPalindrome("MadamI'mAdam.")).toBe(true);
        });

        test("Should return true with punctation and spaces", () => {
            expect(isPalindrome("Red rum, sir, is murder.")).toBe(true);
        });

        test("Should remove spaces and give true", () => {
            expect(isPalindrome("m u m")).toBe(true);
        });

});

describe("Not Palindrome", () => {
    test("Not a string should return false", () => {
        expect(isPalindrome(2134)).toBe(false);
    });

    test("Null return false", () => {
        expect(isPalindrome(null)).toBe(false);
    });

    test("Boolean return false", () => {
        expect(isPalindrome(true)).toBe(false);
    });

    test("Boolean return false", () => {
        expect(isPalindrome(false)).toBe(false);
    });

    test("No argument return false", () => {
        expect(isPalindrome("")).toBe(false);
    });

    test("Not a palindrome should return false", () => {
        expect(isPalindrome("apple")).toBe(false);
    });
});