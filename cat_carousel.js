$(function() {
$('.thumbnail').on('click', 'img',  function(){
    $('.hero img').attr('src', $(this).attr('src'));
   
  });
});
