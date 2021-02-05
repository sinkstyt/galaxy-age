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

  test("should return the age in Mars years with its decimal component removed when Martian days have been calculated", () => {
    newAge.convertToMars();
    expect(newsAge.mars).toEqual(23);
  });

  test("should a Jupiter years age converted from Earth age", () => {
    newAge.convertToJupiter();
    expect(newAge.jupiter).toEqual(3.79);
  });

  test("should return the decimal component, if any, from Jupiter years age converted to Jupiter days", () => {
    newAge.convertToJupiterDays();
    expect(newAge.jupiterDays).toEqual(8402);
  });

  test("should return the age in Jupiter years with its decimal component removed when Jupiter days have been calculated", () => {
    newAge.convertToJupiterDays();
    expect(newsAge.jupiter).toEqual(3);
  });

  test("should return the global average (mean) for years of life expected", () => {
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(73);
  });

  test("should return lifeExpect value increased by 7 when person is from first world country but NOT in the Americas", () => {
    newAge.firstWorldNotAmericas = true;
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(80);
  });

  test("should return lifeExpect value decreased by 10 when African country is indicated", () => {
    newAge.fromAfrica = true;
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(80);
  });

  test("should return lifeExpect value increased by 6 when country in the Americas is indicated", () => {
    newAge.fromAmericas = true;
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toEqual(79);
  });

  test("should return lifeExpect value increased by 2 when sex female is indicated", () => {
    newAge.fromAmericas = true;
    newAge.isFemale = true;
    expect(newAge.lifeExpect).toEqual(81);
  })
  
  // test("should correctly assign a health key with a value of 100", () => {
  //   expect(newPlayer.health).toEqual(100);
  // });
  
  // test("should correctly assign strength with a value of 0", () => {
  //   expect(newPlayer.strength).toEqual(0);
  // });

  // test("should correctly assign attackAccuracy with a value of 0", () => {
  //   expect(newPlayer.accuracy).toEqual(0);
  // });

  // test("should return a number greater than or equal to the first parameter", () => {
  //   expect(newPlayer.randomRoll(1, 10)).toBeGreaterThanOrEqual(1);
  // });

  // test("should return a number less than or equal to the second parameter", () => {
  //   expect(newPlayer.randomRoll(1, 10)).toBeLessThanOrEqual(10);
  // });

  // test("should correctly return the amount of damage applied given a weapon as an argument", () => {
  //   expect(newPlayer.attackDamage(halberd)).toBeGreaterThanOrEqual(10);
  //   expect(newPlayer.attackDamage(halberd)).toBeLessThanOrEqual(40);
  // });

  // test("should correctly return a value used to check accuracy given a weapon as an argument", () => {
  //   expect(newPlayer.attackAccuracy(sword)).toBeGreaterThanOrEqual(15);
  //   expect(newPlayer.attackAccuracy(sword)).toBeLessThanOrEqual(100);
  // });

  // test("should return a boolean", () => {
  //   expect(typeof newPlayer.isHit(bullseye)).toEqual("boolean");
  // });

  // test("should return true if the number is greater than 80", () => {
  //   expect(newPlayer.isHit(bullseye)).toEqual(true);
  // });

  // test("should return an instance of Player with a 'level' key assigned the value 0", () => {
  //   expect(newPlayer.level).toEqual(0);
  // });

  // test("should allow method levelUp to increase strength by 1", () => {
  //   newPlayer.levelUp();
  //   expect(newPlayer.strength).toEqual(1);
  // })

  // test("should allow method levelUp to increase health by 10", () => {
  //   newPlayer.levelUp();
  //   expect(newPlayer.health).toEqual(110);
  // })

  //   test("should increment accuracy on Player instance by 1", () => {
  //   newPlayer.levelUp();
  //   expect(newPlayer.accuracy).toEqual(1);
  //   })

  //   test("should return an instance of Player with keys 'xp' and 'xpToLevel' assigned 0 and 100 respectively", () => {
  //     expect(newPlayer.xp).toEqual(0);
  //     expect(newPlayer.xpToLevel).toEqual(100);
  //   })

});