import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Age from './Age.js';

$('form').on("submit", function(event) {
  event.preventPrefault();
  $("span.error-display").empty();
  $(".current-converted").empty();
  $(".years-left").empty();
  const ageInput = parseInt($('#user-age-earth-years').val());
  const earthling = new Age(ageInput);
  let badNumber = earthling.convertAll();
  if (badNumber !== "undefined") {
    return $(".error-display").prepend(`<p>${badNumber}</p>`);
  }
  const regionInput = $("input:radio[name=region-pick]:checked").val();
  const sexInput = $("input:radio[name=sex-indicate]:checked").val();
  earthling.sex = sexInput;
  earthling.region = regionInput;
  earthling.calcLifeExpectance();
  // this.yearsBeyond is assigned a non-zero once .calcLifeExpectance has been called. If this.yearsBeyond is negative, then these values indicate the person has lived x years longer than their calculated life expectancy.
  $("div.current-converted").prepend(buildCurrents(earthling));
});

function buildCurrents(personObj) {
  let tableAsString = `<table class="table"><thead><tr><th scope="col">Mercury</th><th scope="col">Venus</th><th scope="col">Mars</th><th scope="col">Jupiter</th></tr></thead><tbody><tr>`;
  // iterate through EITHER 1) conversions of current ages OR 2) gaps between current age and expectancy, Which? determined by second argument
  let planetsLowercase = ["mercury", "venus", "mars", "jupiter"];
  for (const planet of planetsLowercase) {
    tableAsString += `<td>${personObj[planet]}</td>`;
  }
  tableAsString += `</tr></tbody></table>`;
  return tableAsString;
}