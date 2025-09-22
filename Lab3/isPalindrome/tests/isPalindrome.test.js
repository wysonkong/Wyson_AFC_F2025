let isPalindrome = require('../src/isPalindrome');


describe("isPalindrome", () => {


    describe("palindrome", () => {
        test("Palindrome should return true", () => {
            expect(isPalindrome("racecar")).toBe(true);
        });
    })

    describe("palindrome", () => {
        test("Should return true with punctation", () => {
            expect(isPalindrome("MadamI'mAdam.")).toBe(true);
        });
    })

    describe("palindrome", () => {
        test("Should return true with punctation and spaces", () => {
            expect(isPalindrome("Red rum, sir, is murder.")).toBe(true);
        });
    })

    describe("palindrome", () => {
        test("Should remove spaces and give true", () => {
            expect(isPalindrome("m u m")).toBe(true);
        });
    })

    describe("palindrome", () => {
        test("Not a string should return false", () => {
            expect(isPalindrome(2134)).toBe(false);
        });
    })

    describe("palindrome", () => {
        test("Null return false", () => {
            expect(isPalindrome(null)).toBe(false);
        });
    })

    describe("palindrome", () => {
        test("Boolean return false", () => {
            expect(isPalindrome(true)).toBe(false);
        });
    })

    describe("palindrome", () => {
        test("Boolean return false", () => {
            expect(isPalindrome(false)).toBe(false);
        });
    })

    describe("palindrome", () => {
        test("No argument return false", () => {
            expect(isPalindrome("")).toBe(false);
        });
    })

    describe("palindrome", () => {
        test("Not a palindrome should return false", () => {
            expect(isPalindrome("apple")).toBe(false);
        });
    })

});