# _Your Age on a Different Planet_
_ever wondered?_

#### _Brief Synopsis_
* Takes in your Earth age in years and returns to you your current age were you living on a different Solar System planet

#### By _**Tyler Sinks**_
_originally created 5 February, 2021_
_major revision 17 February, 2021_
_last major revisions 22-23 February, 2021_

## Technologies Used
* _html, css, javascript_
* _ESLint, Jest, and npm_
* _webpack, webpack-cli, Babel_
* _VS Code, Chrome DevTools_

## Description
* Takes in your age in years ("Earth years")
* Takes in your selection for which planet in the Solar System to which your age will be converted
* Can also tell you a prediction of how many additional years you would expect to live on selected planet
* If you have achieved an age beyond selected planet's predicted life expectancy, the difference will be shown.
> To clarify: a Mercury year lasts 88 Earth days due to that planet's quick pace at completing a full revolution around the Sun.
> Thus one would expect one's Mercury age to be much greater than Earth age, since 88 fits just over four times into 365.

## Specs
|                                           **Describe: Age()**                                      |                       |                                   |
|:---------------------------------------------------------------------------------------------------|----------------------:|-----------------------------------|
|                                                Test                                                |         Input         |         Output                    |
| should correctly instantiate an Age object with earthYearsAge set equal to the interger passed in  | new Age(45)           | newAge.age = 45                   |
|                                                                                                    |                       |                                   |
|                                  **Describe: convertToMercury()**                                  |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Mercury years         | new Age(45)           | newAge.mercury = 186.71 Mercury years|
| (conversion used: 1 Mercury year = 87.969 Earth days)                                              |                       |                                   | 
|                                                                                                    |                       |                                   |
|                                 **Describe: convertToVenus())**                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Venus years           | new Age(45)           | newAge.venus = 73.11 Venus years  |
| (conversion used: 1 Venus year = 224.65 Earth days)                                                |                       |                                   | 
|                                                                                                    |                       |                                   |
|                                        **Describe: convertToMars()**                               |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Mars years            | new Age(45)           | newAge.mars = 23.91 Mars years    |
| (conversion used: 1 Mars year = 687 Earth days)                                                    |                       |                                   |
|                                                                                                    |                       |                                   |
|                                     **Describe: convertToJupiter()**                               |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Jupiter years         | new Age(45)           | newAge.jupiter = 3.79 Jupiter years |
| (conversion used: 1 Jupiter year = 11.8618 Earth years)                                            |                       |                                   | 
|                                                                                                    |                       |                                   |
|                                                                                                    |                       |                                   |
|                                        **Describe: calcLifeExpectance()**                          |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that is the mean life expectancy in Earth years worldwide                   | new Age(45)           | newAge.lifeExpect = 73 Earth years|
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy up by 7 years           | new Age(45)           |                                   |
| to be applied to users who mark they are from a first world country NOT in the Americas         | newAge.region = "first world" && newAge.region !== "Americas"| newAge.lifeExpect = 80 Earth years| 
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy down by 10 years        | new Age(45)           |                                   |
| to be applied to users who mark they are from an African country                                | newAge.region = "Africa" |newAge.lifeExpect = 63 Earth years | 
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy up by 6 years           | new Age(45)           |                                   |
| to be applied to users who mark they are from a country in North or South America             | newAge.region = "Americas" | newAge.lifeExpect = 79 Earth years| 
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy up by 2 years when      | new Age(45)           | newAge.lifeExpect = 75 Earth years |
| when users mark sex = "female"                                                                     | newAge.sex = "female" |                                   | 
|                                                                                                    |                       |                                   |
|                                        **Describe: calcYearsLeft()**                               |         Input         |         Output                    |
|                                                Test                                                | new Age(45)           |                                   |
| should return a number in Mercury years that finds the difference between current Mercury years    | newAge.calcLifeExpectance() |                             |
| age and Mercury years life expectancy (no sex or region data provided, thus EarthExpected = 73)    | newAge.calcYearsLeft("mercury") | newAge.mercuryLeft = (116.18) |
|                                                                                                    |                       |                                   |
|                                                Test                                                | new Age(45)           |                                   |
| should return a number in Venus years that is the difference between current Venus years           | newAge.calcLifeExpectance() |                             |
| age and Venus years life expectancy  (no sex or region data provided, thus EarthExpected = 73)     | newAge.calcYearsLeft("venus") | newAge.venusLeft = (45.50) |
|                                                                                                    |                       |                                   |
|                                                Test                                                | new Age(45)           |                                   |
| should return a number in Mars years that is the difference between current Mars years             | newAge.calcLifeExpectance() |                             |
| age and Mars years life expectancy  (no sex or region data provided, thus EarthExpected = 73)      | newAge.calcYearsLeft("mars") | newAge.marsLeft = (14.87)  |
|                                                                                                    |                       |                                   |
|                                                Test                                                | new Age(45)           |                                   |
| should return a number in Jupiter years that is the difference between current Jupiter years age   | newAge.calcLifeExpectance() |                             |
| and Jupiter years life expectancy  (no sex or region data provided, thus EarthExpected = 73)  | newAge.calcYearsLeft("jupiter") | newAge.jupiterLeft = (6.15)  |
|                                                                                                    |                       |                                   |
|                                  **Describe: roundToNearestHundredth()**                           |                       |                                   |
|                                                Test                                                | new Age(45)           |                                   |
| should return a number that has more than two digits after its dot rounded to the nearest  | roundToNearestHundredth(41.96549) |  41.97                        |
| hundredth.                                                                                         |                       |                                   |
|                                  **Describe: outlasterCheck()**                                    |                       |                                   |
|                                                Test                                                | new Age(100)          |  newAge.yearsBeyond = 2.28        |
| should take in a planet and assign this.yearsBeyond to the positive value of .{PLANET}Left, when   | newAge.calcLifeExpectance() |  41.97                      |
| .{PLANET}Left is less than zero                                                                    | newAge.outlasterCheck("jupiter") |                        |
|                                                                                                    |                       |                                   |

## **Installation Instructions to Setup This Project on Your Machine**
* Copy the following link to your clipboard: https://github.com/sinkstyt/galaxy-age.git
* Open a Bash Terminal (some might call it a 'command line')
* In this terminal window, navigate to a directory into which you will clone this project (make a local copy from the GitHub remote copy)
* Within your git bash terminal type in `$ git clone   ` with one space between "clone" and pasted clipboard contents (https://github.com/sinkstyt/galaxy-age.git)
> at Terminal promt
```
users/YOUR_USERNAME/ $ git clone https://github.com/sinkstyt/galaxy-age.git
```
* After the page has been cloned to your chosen directory, use `$ cd galaxy-age` to switch into its root folder.
* Check to see that you have npm installed with the prompt `$ npm -v`. As long as the first number in the version is 3 or greater, you should not anticipate any problems. If you are using OS X or greater and npm is not installed, use the command `$ brew install node`
* Check node version with `$ node -v`. Node version should start with a 4 or higher.
* For Windows users without npm, go to https://nodejs.org/en/download/ and download the LTS (long term support) option most appropriate for your system
* From within the root directory, use the following commands to have npm (Node package manager) install other dependencies
> `$ npm install`
* To see the project assembled and rendered in browser, use the following npm prompt. A tab should open to the rendered page.
> `$ npm run start`

### Examine all this project's contents in a text editor
* Launch all the files in your text editor of choice (such as VS Code, Atom, Sublime, VIM, etc.)
* If configured, use `$ code .` to open the entire repository in VS Code

## Known Bugs

* _The user interface is not yet connected to the business logic_

## References &mdash; sources for measurements of other Solar System planets' year-lengths
1. https://www.universetoday.com/14334/how-long-is-a-year-on-mercury-1/
2. https://www.worldatlas.com/articles/how-long-is-a-day-and-year-on-venus.html
3. https://mars.nasa.gov/resources/21392/mars-in-a-minute-how-long-is-a-year-on-mars/
4. https://ourworldindata.org/life-expectancy

## License
MIT 2.0

## Contact Information
_[Contact the author](mailto:tyler.sinks@gmail.com)_