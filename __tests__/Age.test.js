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