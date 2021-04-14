import Age from '../src/js/Age.js';

describe("Age", () => {
  let newAge;
  let centenarian;

  beforeEach(() => {
    newAge = new Age(45);
    centenarian = new Age(100);
  });
    
  test("should correctly instantiate an Age object with earthYearsAge set equal to the interger passed in", () => {
    expect(newAge.earthYearsAge).toEqual(45);
  });

  test("should return a string message reminding of valid input type if input Earth age is a non-number type", () => {
    let nonNumberAge = new Age("fizz");
    expect(nonNumberAge.convertAll()).toBe("please enter age as a one, two, or three digit number");
  });

  test("should return a string message reminding of valid input type if input Earth age included a decimal point", () => {
    let decimalIncludedAge = new Age(10.5);
    expect(decimalIncludedAge.convertAll()).toBe("please enter age as a one, two, or three digit number");
  });

  test("should return a string message reminding of valid input range if input Earth age is negative", () => {
    let negAge = new Age(-353);
    expect(negAge.convertAll()).toBe("please enter your age in years");
  });

  test("should return a string message reminding of valid input range if input Earth age is greater than 130", () => {
    let wishfulThinker = new Age(9000000000);
    expect(wishfulThinker.convertAll()).toBe("please enter your age in years");
  });

  test("should accurately convert to Mars years from Earth age", () => {
    newAge.convertAll();
    expect(newAge.mercury).toBeGreaterThan(186);
    expect(newAge.mercury).toBeLessThan(187);
  });

  test("should accurately convert to Venus years from Earth age", () => {
    newAge.convertAll();
    expect(newAge.venus).toBeGreaterThan(73);
    expect(newAge.venus).toBeLessThan(74);
  });

  test("should accurately convert to Mars years from Earth age", () => {
    newAge.convertAll();
    expect(newAge.mars).toBeGreaterThan(23);
    expect(newAge.mars).toBeLessThan(24);
  });

  test("should accurately convert to Jupiter years from Earth age", () => {
    newAge.convertAll();
    expect(newAge.jupiter).toBeGreaterThan(3.6);
    expect(newAge.jupiter).toBeLessThan(4);
  });

  test("should return the global mean life expectancy", () => {
    expect(newAge.lifeExpect).toBeCloseTo(73);
  });

  test("should return mean life expectancy unchanged if key `region` stores an empty string", () => {
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toBeCloseTo(73);
  });

  test("should return lifeExpect value increased by 7 when person is from first world country but NOT in the Americas", () => {
    newAge.region = "first world";
    newAge.calcLifeExpectance();
    expect(newAge["first world"]).toEqual(80);
  });

  test("should decrease lifeExpect by 10 when region equals Africa", () => {
    newAge.region = "Africa";
    newAge.calcLifeExpectance();
    expect(newAge["Africa"]).toEqual(63);
  });

  test("should increase lifeExpect value by 6 when region equals Americas", () => {
    newAge.region = "Americas";
    newAge.calcLifeExpectance();
    expect(newAge["Americas"]).toBe(79);
  });

//   test("should return lifeExpect value increased by 2 when sex female is indicated", () => {
//     newAge.region = "Americas";
//     newAge.sex = "female";
//     newAge.calcLifeExpectance();
//     newAge.calcLifeExpectBySex();
//     expect(newAge.lifeExpect).toEqual(81);
//   });

//   test("should return the difference in Mercury years between Mercury life expectancy and current age in Mercury years", () => {
//     newAge.calcYearsLeft(`mercury`);
//     expect(newAge.mercuryLeft).toEqual(116.18);
//   });

//   test("should return the difference in Venus years between Venus life expectancy and current age in Venus years", () => {
//     newAge.calcLifeExpectance();
//     newAge.calcYearsLeft("venus");
//     expect(newAge.venusLeft).toEqual(45.5);
//   });
  
//   test("should return the difference in Mars years between Mars life expectancy and current age in Mars years", () => {
//     newAge.calcLifeExpectance();
//     newAge.calcYearsLeft("mars");
//     expect(newAge.marsLeft).toEqual(14.87);
//   });

//   test("should return the difference in Jupiter years between Jupiter life expectancy and current age in Jupiter years", () => {
//     newAge.calcLifeExpectance();
//     newAge.calcYearsLeft("jupiter");
//     expect(newAge.jupiterLeft).toEqual(2.36);
//   });

//   test("should return a number that has more than two digits after its dot rounded to the nearest hundredth", () => {
//     const roundedNum = newAge.roundToNearestHundredth(41.96549);
//     expect(roundedNum).toEqual(41.97);
//   });

//   test("should return a positive number (the absolute value) of the difference between a planet's life expectancy and this same planet's current age", () => {
//     centenarian = new Age(100);
//     centenarian.calcLifeExpectance();
//     centenarian.calcYearsLeft("jupiter");
//     centenarian.outlasterCheck("jupiter");
//     expect(centenarian.yearsBeyond).toEqual(2.28);
//   });
});