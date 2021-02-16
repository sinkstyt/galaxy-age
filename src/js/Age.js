export default class Age{
  constructor(earthAgeInt) {
    this.earthYearsAge = earthAgeInt;
    this.mercury = 0;
    this.venus = 0;
    this.mars = 0;
    this.jupiter = 0;
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
    // this.lifeExpect = 73;
  }

  roundToNearestHundredth(inputNum) {
    let returnNum = inputNum *100;
    returnNum = Math.round(returnNum) / 100;
    return returnNum;
  }
}