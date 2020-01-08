'use strict';

$(function() {
  $('.thumbnail').on('click', 'img',  function(){ 
    $('.hero img').attr('src', $(this).attr('src')).attr('alt', $(this).attr('alt')); 
  });
});
