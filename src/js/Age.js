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
  }

  convertToMercury() {
    this.mercury = this.roundToNearestHundredth(this.earthYearsAge * 365 / 87.969);
  }

  convertToVenus() {
    this.venus = this.roundToNearestHundredth(this.earthYearsAge * 365 / 224.65);
  }

  convertToMars() {
    this.mars = this.roundToNearestHundredth(this.earthYearsAge * 365 / 687);
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
      // this.convertToJupiter();
      // jupiterExpect = this.roundToNearestHundredth(this.lifeExpect * 365 / 11.8618);
      // this.jupiterLeft = jupiterExpect - this.jupiter;
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
}