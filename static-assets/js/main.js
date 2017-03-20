// Generated by CoffeeScript 1.6.3

$(function() {

  $(document).mouseup(function (e) {
    var container = $(".Form");
    var background = $(".intro-header");
    //
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0 // ... nor a descendant of the container
        && container.is(":visible")
        && background.is(e.target)
    )
    {
      window.location = "home";
      container.fadeOut();
    }
  });

  $('.form-close').click(function (){
    var container = $(".Form");
    container.fadeOut();
  });
  // contact form animations
  $('#give-button').click(function() {
    $('#giveForm').fadeIn();
  });
  $('#get-button').click(function() {
    $('#searchForm').fadeIn();
  });


  $('.InterestFormPopUp').click(function(){
    var itemId = $(this).data('id');
    $("#user_item_id").val( itemId );
    $('#InterestFormPopUp').modal('show');
  });

  $( "#giveform" ).submit(function( event ) {
    alert('Thank you for your donation! Someone will contact you if they are interested.');

  });

  $('.form-submit').click(function(event){
    $('.form-submit').val('Great!');
  });

  $('.InterestFormPopUp').click(function(){

    $('#user_name').text($(this).data('user_name'));
    $('#user_address').text($(this).data('user_address'));
    $('#user_email').text($(this).data('user_email'));
    $('#user_phonenumber').text($(this).data('user_phonenumber'));
    $('#user_item').text($(this).data('user_item'));
    $("#user_item_id").val( $(this).data('user_item_id'));
    $('#InterestFormPopUp').modal('show');
  });

  $( "#interestFormDetail" ).submit(function( event ) {
    alert('Thank you for your interest!');

  });



  // $('#interest-submit-btn').click(function(){
  //   $('.interestForm').html('<p>deleted</p>');
  // });
});


/*
 //@ sourceMappingURL=main.map
 */

// post view


// $(document).ready(function() {
//     $('#list').click(function(event){
//       event.preventDefault();
//       $('#posts .item').addClass('list-group-item');
//     });
//
//     $('#grid').click(function(event){
//       event.preventDefault();
//       $('#posts .item').removeClass('list-group-item');
//       $('#posts .item').addClass('grid-group-item');
//     });
// });
