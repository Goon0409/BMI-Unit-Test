const kg = 70;
const m = 1.78;
const body_mass_index = kg / (m**2);

function bmiResult(){
    const result = body_mass_index;
    const expected = 21.093170054286073;

    console.assert(result === expected, "The result " + result + " does not match the expected value " + expected)
}


console.log("BMI: " + body_mass_index);
bmiResult();







// 22.093170054286073