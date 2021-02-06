import Age from '../src/js/Age.js';

describe("Age", () => {
  let newAge;

  beforeEach(() => {
    newAge = new Age(45, "Andrea");
  });
    
  test("should correctly instantiate an Age object with earthYearsAge set equal to the interger passed in", () => {
    expect(newAge.earthYearsAge).toEqual(45);
  });

  test("should correctly instantiate an Age object with name key set to the passed in name value", () => {
    expect(newAge.name).toEqual("Andrea");
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

  test("should return the decimal component, if any, from Mars years age converted to Martian days", () => {
    newAge.convertToMarsDays();
    expect(newAge.marsDays).toEqual(608);
  });

  // test("should return the age in Mars years with its decimal component removed when Martian days have been calculated", () => {
  //   newAge.convertToMars();
  //   expect(newsAge.mars).toEqual(23);
  // });

  // test("should a Jupiter years age converted from Earth age", () => {
  //   newAge.convertToJupiter();
  //   expect(newAge.jupiter).toEqual(3.79);
  // });

  // test("should return the decimal component, if any, from Jupiter years age converted to Jupiter days", () => {
  //   newAge.convertToJupiterDays();
  //   expect(newAge.jupiterDays).toEqual(8402);
  // });

  // test("should return the age in Jupiter years with its decimal component removed when Jupiter days have been calculated", () => {
  //   newAge.convertToJupiterDays();
  //   expect(newsAge.jupiter).toEqual(3);
  // });

  // test("should return the global average (mean) for years of life expected", () => {
  //   newAge.calcLifeExpectance();
  //   expect(newAge.lifeExpect).toEqual(73);
  // });

  // test("should return lifeExpect value increased by 7 when person is from first world country but NOT in the Americas", () => {
  //   newAge.firstWorldNotAmericas = true;
  //   newAge.calcLifeExpectance();
  //   expect(newAge.lifeExpect).toEqual(80);
  // });

  // test("should return lifeExpect value decreased by 10 when African country is indicated", () => {
  //   newAge.fromAfrica = true;
  //   newAge.calcLifeExpectance();
  //   expect(newAge.lifeExpect).toEqual(80);
  // });

  // test("should return lifeExpect value increased by 6 when country in the Americas is indicated", () => {
  //   newAge.fromAmericas = true;
  //   newAge.calcLifeExpectance();
  //   expect(newAge.lifeExpect).toEqual(79);
  // });

  // test("should return lifeExpect value increased by 2 when sex female is indicated", () => {
  //   newAge.fromAmericas = true;
  //   newAge.isFemale = true;
  //   expect(newAge.lifeExpect).toEqual(81);
  // })

  // test("should return the difference in Mercury years between Mercury life expectancy and current age in Mercury years", () => {
  //   newAge.calcLifeExpectance();
  //   newAge.calcYearsLeft("mercury");
  //   expect(newAge.mercuryLeft).toEqual(116.81);
  // });

  // test("should return the difference in Venus years between Venus life expectancy and current age in Venus years", () => {
  //   newAge.calcLifeExpectance();
  //   newAge.calcYearsLeft("venus");
  //   expect(newAge.venusLeft).toEqual(116.81);
  // });
  
  // test("should return the difference in Mars years between Mars life expectancy and current age in Mars years", () => {
  //   newAge.calcLifeExpectance();
  //   expect(newAge.marsLeft).toEqual(14.87);
  // });

  // test("should return the difference in Jupiter years between Jupiter life expectancy and current age in Jupiter years", () => {
  //   newAge.calcLifeExpectance();
  //   expect(newAge.jupiterLeft).toEqual(6.15);
  // });

  test("should return a number that has more than two digits after its dot rounded to the nearest hundredth", () => {
    const roundedNum = newAge.roundToNearestHundredth(41.96549);
    expect(roundedNum).toEqual(41.97);
  });
});