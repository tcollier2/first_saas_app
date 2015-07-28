$(document).ready(function() {
  Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
  // Watch for a form submission:
  $("#form-submit-btn").click(function(event) {
    event.preventDefault();
    $('input[type=submit]').prop('disabled', true);
    var error = false;
    var ccNum = $('#source_number').val(),
        cvcNum = $('#source_code').val(),
        expMonth = $('#source_month').val(),
        expYear = $('#source_year').val();
    if (!error) {
      // Get the Stripe token:
      Stripe.createToken({
        number: ccNum,
        cvc: cvcNum,
        exp_month: expMonth,
        exp_year: expYear
      }, stripeResponseHandler);
    }
    return false;
  }); // form submission
  function stripeResponseHandler(status, response) {
    // Get a reference to the form:
    var f = $(".new_user");
    // Get the token from the response:
    var token = response.id;
    // Add the token to the form:
    f.append('<input type="hidden" name="user[stripe_source_token]" value="' + token + '" />');
    // Submit the form:
    f.get(0).submit(); 
  }
});