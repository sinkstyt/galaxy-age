export default class Age{
  constructor(earthAgeInt) {
    this.earthYearsAge = earthAgeInt;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
    this.sex = '';
    this.region = '';
    this.lifeExpect = 73;
    this.yearsBeyond = 0;
    this.expects = {};
    this.conversionFactor = {
      "mercury": 1 / 87.969,
      "venus": 1 / 224.65,
      "mars": 1 / 687,
      "jupiter": 1 / (11.8618 * 365),
    },
    this.regionFactor = {
      "first world": 7,
      "Americas": 6,
      "Africa": -10
    };
    this.expectancies = {};
  }

  convertAll() {
    if (typeof this.earthYearsAge !== "number" || !Number.isInteger(this.earthYearsAge)) {
      return "please enter age as a one, two, or three digit number";
    } else if (this.earthYearsAge < 0 || this.earthYearsAge > 130) {
      return "please enter your age in years";
    }
    const earthNow = this.earthYearsAge * 365;
    for (const planet in this.conversionFactor) {
      this[planet] = earthNow * this.conversionFactor[planet];
    }
  }
  
  calcLifeExpectance() {
    if (this.region !== '') {
      for (const regionKey in this.regionFactor) {
        this[regionKey] = Number(this.lifeExpect) + Number(this.regionFactor[regionKey]); 
      }
      this.lifeExpect = this[this.region];
    }
    if (this.sex === "female") {
      this.lifeExpect += 2;
    }
    const earthExpected = this.lifeExpect * 365;
    for (const planet in this.conversionFactor) {
      this.expectancies[planet] = earthExpected * this.conversionFactor[planet];
    }
    this.yearsBeyond = this.lifeExpect - this.earthYearsAge;
    const earthGap = this.yearsBeyond * 365;
    for (const planet in this.conversionFactor) {
      this.expects[planet] = earthGap * this.conversionFactor[planet];
    }
  }
}