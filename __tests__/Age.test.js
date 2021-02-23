import Age from '../src/js/Age.js';

describe("Age", () => {
  let newAge;

  beforeEach(() => {
    newAge = new Age(45);
  });
    
  test("should correctly instantiate an Age object with earthYearsAge set equal to the interger passed in", () => {
    expect(newAge.earthYearsAge).toEqual(45);
  });

  test("should return a Mercury years age converted from Earth age", () => {
    newAge.convertToMercury();
    expect(newAge.mercury).toEqual(186.71);
  });

  test("should return a Venus years age converted from Earth age", () => {
    newAge.convertToVenus();
    expect(newAge.venus).toEqual(73.11)
  })

  test("should return a Mars years age converted from Earth age", () => {
    newAge.convertToMars();
    expect(newAge.mars).toEqual(23.91);
  })

  test("should a Jupiter years age converted from Earth age", () => {
    newAge.convertToJupiter();
    expect(newAge.jupiter).toEqual(3.79);
  });

  test("should return the global average (mean) for years of life expected", () => {
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(73);
  });

  test("should return lifeExpect value increased by 7 when person is from first world country but NOT in the Americas", () => {
    newAge.region = "first world";
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(80);
  });

  test("should return lifeExpect value decreased by 10 when African country is indicated", () => {
    newAge.region = "Africa";
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(63);
  });

  test("should return lifeExpect value increased by 6 when country in the Americas is indicated", () => {
    newAge.region = "Americas";
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(79);
  });

  test("should return lifeExpect value increased by 2 when sex female is indicated", () => {
    newAge.region = "Americas";
    newAge.sex = "female";
    newAge.calcLifeExpectance();
    newAge.calcLifeExpectBySex();
    expect(newAge.lifeExpect).toEqual(81);
  });

  test("should return the difference in Mercury years between Mercury life expectancy and current age in Mercury years", () => {
    newAge.calcYearsLeft(`mercury`);
    expect(newAge.mercuryLeft).toEqual(116.18);
  });

  test("should return the difference in Venus years between Venus life expectancy and current age in Venus years", () => {
    newAge.calcLifeExpectance();
    newAge.calcYearsLeft("venus");
    expect(newAge.venusLeft).toEqual(45.5);
  });
  
  test("should return the difference in Mars years between Mars life expectancy and current age in Mars years", () => {
    newAge.calcLifeExpectance();
    newAge.calcYearsLeft("mars");
    expect(newAge.marsLeft).toEqual(14.87);
  });

  // test("should return the difference in Jupiter years between Jupiter life expectancy and current age in Jupiter years", () => {
  //   newAge.calcLifeExpectance();
  //   expect(newAge.jupiterLeft).toEqual(6.15);
  // });

  test("should return a number that has more than two digits after its dot rounded to the nearest hundredth", () => {
    const roundedNum = newAge.roundToNearestHundredth(41.96549);
    expect(roundedNum).toEqual(41.97);
  });
});