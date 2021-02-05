# _Your Age on a Different Planet_
_ever wondered?_

#### _Brief Synopsis_
* Takes in your Earth age in years and returns to you your current age were you living on a different Solar System planet

#### By _**Tyler Sinks**_
_originally created 5 February, 2021_
_last major revision 7 February, 2021_

## Technologies Used
* _html, css, javascript_
* _ESLint, Jest, and npm_
* _webpack, webpack-cli, Babel_
* _VS Code, Chrome DevTools_

## Description
* Takes in your age in years
* Takes in your selection for which planet in the Solar System to which your age will be converted
* Can also tell you a prediction of how many additional years you would expect to live on selected planet
* If you have achieved an age beyond selected planet's predicted life expectancy, the difference will be shown.
> To clarify: a Mercury year lasts 88 Earth days due to that planet's quick pace at completing a full revolution around the Sun.
> Thus one would expect one's Mercury age to be much greater than Earth age, since 88 days fits just over four times in 365.

## Specs
|                                           **Describe: Age()**                                      |                       |                                   |
|:---------------------------------------------------------------------------------------------------|----------------------:|-----------------------------------|
|                                                Test                                                |         Input         |         Output                    |
| should correctly instantiate an Age object with earthYearsAge set equal to the interger passed in  | new Age(45)           | newAge.age = 45                   |
| should correctly instantiate an Age object with name key set to the passed in name value           | new Age(45, "Andrea") | newAge.name = "Andrea"            |
|                                                                                                    |                       |                                   |
|                                                                                                    |                       |                                   |
|                                  **Describe: convertToMercury()**                                  |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Mercury years         | new Age(45)           | newAge.mercury = 186.71 Mercury years|
| (since the ratio of Mercury days to Mercury years is about 3:2, Mercury years is only unit used)   |                       |                                   | 
| (conversion used: 1 Mercury year = 87.969 Earth days)                                              |                       |                                   |
|                                                                                                    |                       |                                   |
|                                                                                                    |                       |                                   |
|                                 **Describe: convertToVenus())**                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Venus years           | new Age(45)           | newAge.venus = 73.11 Venus years  |
| (since the ratio of one Venus day to one Venus year is 243 Earth days:224.65 Earth days, Venus days are ignored) |         |                                   | 
| (conversion used: 1 Venus year = 224.65 Earth days)                                                |                       |                                   |
|                                                                                                    |                       |                                   |
|                                        **Describe: convertToMars()**                               |                       |                                   
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Mars years            | new Age(45)           | newAge.mars = 23.91 Mars years    |
| (1 Mars day = 24 hours and 40 minutes. Thus Mars days WILL be considered when converting age)      |                       |                                   | 
| (conversion used: 1 Mars year = 687 Earth days; 1 Mars day = 24 Earth hours and 40 minutes)        |                       |                                   |
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Mars years and Mars days | new Age(45)        | newAge.mars = 23.91 Mars years    |
| (1 Mars day = 24 hours and 40 minutes. Thus Mars days WILL be considered when converting age)      |  new Age(45)          | newAge.mars = 23 Martian years and 608 Martian days | 
| (conversion used: 1 Mars year = 687 Earth days; 1 Mars day = 24 Earth hours and 40 minutes)        |                       |                                   |
|                                                                                                    |                       |                                   |
|                                     **Describe: convertToJupiter()**                               |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately converts age in Earth years to age in Jupiter years         | new Age(45)           | newAge.jupiter = 3.794 Jupiter years |
| (conversion used: 1 Jupiter year = 11.8618 Earth years)                                            | new Age(45)           | newAge.jupiter = 3 Jupiter years and 8402 Jupiter days | 
| (10,585.71 Jupiter days = 1 Jupiter year; 1 Jupiter day = 9 Earth hours and 53.5 Earth minutes)    |                       |                                   |
|                                                                                                    |                       |                                   |
|                                        **Describe: calcLifeExpectance()**                          |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that is the mean life expectancy in Earth years worldwide                   | new Age(45)           | newAge.lifeExpect = 73 Earth years|
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy up by 7 years           | new Age(45)           | newAge.lifeExpect = 80 Earth years|
| to be applied to users who mark they are from a first world country NOT in the Americas            |                       |                                   | 
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy down by 10 years        | new Age(45)           |                                   |
| to be applied to users who mark they are from an African country                   | newAge.region = "any African country" |newAge.lifeExpect = 63 Earth years | 
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy up by 6 years           | new Age(45)           |                                   |
| to be applied to users who mark they are from a country in North or South America | newAge.region = "any country in Americas" |newAge.lifeExpect = 79 Earth years| 
|                                                                                                    |                       |                                   |
|                                                Test                                                |         Input         |         Output                    |
| should return a number that accurately adjusts Earth years life expectancy up by 2 years | newAge.region = "any country in Americas" | newAge.lifeExpect = 7 Earth years|
| to be applied to users who mark sex = female                                                   | newAge.sex = "female"  |    newAge.lifeExpect = 81 years      | 


## **Installation Instructions to Setup This Project on Your Machine**
* Copy the following link to your clipboard: https://github.com/sinkstyt/galaxy-age.git
* Open a Bash Terminal (some might call it a 'command line')
* In this terminal window, navigate to a directory into which you will clone this project (make a local copy from the GitHub remote copy)
* Within your git bash terminal type in 'git clone' and then paste in the link from your clipboard by right clicking and selecting 'paste' example below:
> at Terminal promt
```
YOUR_COMPUTER/Users/yourUserName/rpg-folder $ git clone https://github.com/sinkstyt/galaxy-age.git
```
* After the page has been cloned to your chosen directory, use `$ cd galaxy-age` to switch into its root folder.
* Launch all the files in your text editor of choice (such as VS Code, Atom, Sublime, VIM, etc.)
* If configured, use `$ code .` to open the entire repository in VS Code

## Known Bugs

* _Any known issues_
* _should go here_

#### References &mdash; sources for measurements of other Solar System planets' year-lengths
1. https://www.universetoday.com/14334/how-long-is-a-year-on-mercury-1/
2. https://www.worldatlas.com/articles/how-long-is-a-day-and-year-on-venus.html
3. https://mars.nasa.gov/resources/21392/mars-in-a-minute-how-long-is-a-year-on-mars/
4. https://ourworldindata.org/life-expectancy

## License
MIT 2.0

## Contact Information
_Contact the author: tyler.sinks@gmail.com_