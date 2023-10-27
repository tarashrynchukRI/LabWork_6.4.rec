const generateArray = require("./script-test");

describe("generateArray", () => {
   test("generates an array of the correct size", () => {
      const size = 26;
      const array = generateArray(size, -20, 40);
      expect(array.length).toBe(size);
   });
   test("generates an array with elements within the specified range", () => {
      const min = -20;
      const max = 40;
      const array = generateArray(20, min, max);
      array.forEach(el => {
         expect(el).toBeGreaterThanOrEqual(min);
         expect(el).toBeLessThanOrEqual(max);
      });
   });
})