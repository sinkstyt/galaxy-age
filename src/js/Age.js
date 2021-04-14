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
    this.conversionFactor = {
      "mercury": 1 / 87.969, 
      "venus": 1 / 224.65,
      // "mars": 1 / 687,
      "mars": -11,
      "jupiter": 1 / 11.8618,
    };
  }

  // Consider how you could create 1 class with only 2 methods that are able to calculate life expectancy and age on any planet based on the input to that method. Is this inherently better? It could be, and it always depends on your application’s design and its needs.
  convertAll() {
    if (typeof this.earthYearsAge !== "number" || !Number.isInteger(this.earthYearsAge)) {
      return "please enter age as a one, two, or three digit number";
    } else if (this.earthYearsAge < 0 || this.earthYearsAge > 130) { return "please enter your age in years";}

    // with just the Earth age input, make all conversion to Merc, Venus, Mars, and Jupiter ages
    const earthNow = this.earthYearsAge * 365;
    for (const planet in this.conversionFactor) {
      this[planet] = earthNow * this.conversionFactor[planet];
    }

    // with just Earth age input, make all conversions to other planets' life expectancies
  }

  convertToJupiter() {
    this.jupiter = this.roundToNearestHundredth(this.earthYearsAge / 11.8618);
  }

  calcLifeExpectance() {
    if (this.region === "first world" && this.region !== "Americas") {
      this.lifeExpect += 7;
    } else if (this.region === "Africa") {
      this.lifeExpect -= 10;
    } else if (this.region === "Americas") {
      this.lifeExpect += 6;
    }
  }

  calcLifeExpectBySex() {
    if (this.sex === "female") {
      this.lifeExpect += 2;
    }
  }

  calcYearsLeft(planet) {
    if (this.lifeExpect === 73) {
      this.calcLifeExpectance();
      this.calcLifeExpectBySex();
    }
    let mercuryExpect = 0;
    let venusExpect = 0;
    let marsExpect = 0;
    let jupiterExpect = 0;
    switch (planet) {
    case "mercury":
      this.convertToMercury();
      mercuryExpect = this.lifeExpect * 365 / 87.969;
      this.mercuryLeft = this.roundToNearestHundredth(mercuryExpect - this.mercury);
      break;
    case "venus":
      this.convertToVenus();
      venusExpect = this.roundToNearestHundredth(this.lifeExpect * 365 / 224.65);
      this.venusLeft = venusExpect - this.venus;
      break;
    case "mars":
      this.convertToMars();
      marsExpect = this.lifeExpect * 365 / 687;
      this.marsLeft = this.roundToNearestHundredth(marsExpect - this.mars);
      break;
    case "jupiter":
      this.convertToJupiter();
      jupiterExpect = this.lifeExpect / 11.8618;
      this.jupiterLeft = this.roundToNearestHundredth(jupiterExpect - this.jupiter);
      break;
    default:
      return "please enter a valid planet name using all lowercased letters";
    }
  }

  roundToNearestHundredth(inputNum) {
    let returnNum = inputNum *100;
    returnNum = Math.round(returnNum) / 100;
    return returnNum;
  }

  outlasterCheck(planet) {
    if (this.jupiterLeft < 0 || this.mercuryLeft < 0 || this.venusLeft < 0 || this.marsLeft < 0 ) {
      switch (planet) {
      case "mercury":
        this.yearsBeyond -= this.mercuryLeft;
        break;
      case "venus":
        this.yearsBeyond -= this.venusLeft;
        break;
      case "mars":
        this.yearsBeyond -= this.marsLeft;
        break;
      case "jupiter":
        this.yearsBeyond -= this.jupiterLeft;
        break;
      default:
        return "please enter an all-lowercase planet name";
      }
    }
  }
}