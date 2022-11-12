const bmiResult = require("./automated-testing/automated-testing");

test("Checks if BMI result is equal to 22.093170054286073", () => {
    expect(bmiResult(70, 1.78)).toBe(22.093170054286073);

})