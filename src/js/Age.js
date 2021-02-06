export default class Age{
  constructor(earthAgeInt, name = "Gertie") {
    this.earthYearsAge = earthAgeInt;
    this.name = name;
  }

  convertToMercury() {
    this.mercury = this.roundToNearestHundredth(this.earthYearsAge * 365 / 87.969);
  }

  convertToVenus() {
    this.venus = this.roundToNearestHundredth(this.earthYearsAge * 365 / 224.65);
  }

  roundToNearestHundredth(inputNum) {
    let returnNum = inputNum *100;
    returnNum = Math.round(returnNum) / 100;
    return returnNum;
  }
}