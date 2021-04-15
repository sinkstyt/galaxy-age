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

  test("should accurately convert to Mercury years from Earth age", () => {
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

  test("should increase lifeExpect by 2 when sex equals female", () => {
    newAge.sex = "female";
    newAge.calcLifeExpectance();
    expect(newAge.lifeExpect).toBe(75);
  });

  test("should accurately convert life expectancy to Mercury years", () => {
    newAge.sex = "female";
    newAge.region = "Americas";
    newAge.calcLifeExpectance();
    expect(newAge.expectancies["mercury"]).toBeGreaterThan(336);
    expect(newAge.expectancies["mercury"]).toBeLessThan(336.8);
  });

  test("should accurately convert life expectancy to Venus years", () => {
    newAge.calcLifeExpectance();
    expect(newAge.expectancies["venus"]).toBeCloseTo(118.61);
  });
  
  test("should accurately convert life expectancy to Mars years", () => {
    newAge.calcLifeExpectance();
    expect(newAge.expectancies["mars"]).toBeGreaterThan(38.5);
    expect(newAge.expectancies["mars"]).toBeLessThan(39);
  });

  test("should accurately convert life expectancy to Jupiter years", () => {
    newAge.region = "Africa";
    newAge.calcLifeExpectance();
    expect(newAge.expectancies["jupiter"]).toBeGreaterThan(5.31);
    expect(newAge.expectancies["jupiter"]).toBeLessThan(5.35);
  });

  test("should determine the difference between current age in Earth years and life expectancy and store at key `yearsBeyond`", () => {
    centenarian.convertAll();
    centenarian.calcLifeExpectance();
    expect(centenarian.yearsBeyond).toBeCloseTo(-27);
  });

  test("should determine the difference between current Mercury years age and expectancy in Mercury years", () => {
    centenarian.convertAll();
    centenarian.calcLifeExpectance();
    expect(centenarian.expects["mercury"]).toBeCloseTo(-112.03);
  });

  test("should determine the difference between current age and expectancy in Venus years", () => {
    newAge.convertAll();
    newAge.calcLifeExpectance();
    expect(newAge.expects["venus"]).toBeCloseTo(45.49);
  });

  test("should determine the difference between current age and expectancy in Mars years", () => {
    newAge.region = "Americas";
    newAge.sex = "female";
    newAge.convertAll();
    newAge.calcLifeExpectance(); // +6 Americas +2 female
    expect(newAge.expects["mars"]).toBeCloseTo(19.13);
  });
});