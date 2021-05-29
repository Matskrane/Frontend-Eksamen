

$(document).ready(function () {
  $('#submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')

    var name = $('#name').val()
    var email = $('#email').val()
    var subject = $('#subject').val()
    var message = $('#message').val()
    var statusMessage = $('.status')
    statusMessage.empty()

    if(name.length >= 5) {
        statusMessage.append("<div class='valid'> Name is valid </div>" ) 
    } else {
        statusMessage.append("<div class='not-valid'> Name is not valid </div>")
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusMessage.append("<div class='valid'> Email is valid </div>")
    } else {
        statusMessage.append("<div class='not-valid'> Email is not valid </div>")
    }

    if(subject.length >= 15) {
        statusMessage.append("<div class='valid'> Subject is valid </div>")
    } else {
        statusMessage.append("<div class='not-valid'> Subject is not valid </div>")
    }

    if(message.length >= 25) {
        statusMessage.append("<div class='valid'> Message is valid </div>")
    } else {
        statusMessage.append("<div class='not-valid'> Message is not valid </div>")
    }
    
  })
})






