$(function() {
  // Get the form.
  var form = $('#ajax-contact');
  // Get the messages div.
  var formMessages = $('#form-messages');
  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();
    // Serialize the form data.
    var formData = $(form).serialize();
    // Submit the form using AJAX.
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
      $('#message').val('');
      alert("Your Message was sent");
    })
    .fail(function(data) {
      alert("Error. Your Message NOT sent");
    });
  });
});
