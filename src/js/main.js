import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import Age from './Age.js';

// this.yearsBeyond is assigned a non-zero once .calcLifeExpectance has been called. If this.yearsBeyond is negative, then these values indicate the person has lived x years longer than their calculated life expectancy.
$('form').on("submit", function(event) {
  event.preventPrefault();
  const ageInput = parseInt($('#user-age-earth-years').val());
  const inputRegion = $("")
  const earthling = new Age(ageInput);
  earthling.convertAll();

});