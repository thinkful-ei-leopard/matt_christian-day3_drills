'use strict';

function main() {
  $('#number-chooser').submit( e => {
    e.preventDefault();

    const num = parseInt( $(e.currentTarget).find('input[name="number-choice"]').val());
    const results = [];
    
    for(let i = 0; i <= num; i++) {
      if(i % 15 === 0) {
        results.push($('<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
      } else if(i % 5 === 0) {
        results.push($('<div class="fizz-buzz-item buzz"><span>buzz</span></div>'));
      } else if(i % 3 === 0) {
        results.push($(`<div class="fizz-buzz-item"><span>${i}</span></div>`));
      }
    }

    $('.js-results').append(results);
  });
}

$(main);