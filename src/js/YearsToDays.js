import Age from '../src/js/Age.js';

describe("Age", () => {
  let newAge;

  beforeEach(() => {
    newAge = new Age(45);
  })

  test("should return the decimal component, if any, from Mars years age converted to Martian days", () => {
    newAge.convertToMarsDays();
    expect(newAge.marsDays).toEqual(608);
  });

  test("should return the age in Mars years with its decimal component removed when Martian days have been calculated", () => {
    newAge.convertToMars();
    expect(newsAge.mars).toEqual(23);
  });
  
  test("should return the decimal component, if any, from Jupiter years age converted to Jupiter days", () => {
    newAge.convertToJupiterDays();
    expect(newAge.jupiterDays).toEqual(8402);
  });

  test("should return the age in Jupiter years with its decimal component removed when Jupiter days have been calculated", () => {
    newAge.convertToJupiterDays();
    expect(newsAge.jupiter).toEqual(3);
  });
})