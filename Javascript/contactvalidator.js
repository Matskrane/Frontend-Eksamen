

$(document).ready(function () {
  $('#submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')

    const name = $('#name').val()
    const email = $('#email').val()
    const subject = $('#subject').val()
    const message = $('#message').val()
    const statusMessage = $('.status')
    statusMessage.empty()

    if(name.length >= 5) {
        statusMessage.append("<div class='valid'> Name is valid </div>" ) 
    } else {
        statusMessage.append("<div class='not-valid'> Name needs to be 5 characters or more </div>")
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusMessage.append("<div class='valid'> Email is valid </div>")
    } else {
        statusMessage.append("<div class='not-valid'> Email is missing @ or . </div>")
    }

    if(subject.length >= 15) {
        statusMessage.append("<div class='valid'> Subject is valid </div>")
    } else {
        statusMessage.append("<div class='not-valid'> Subject needs to be 15 characters or more </div>")
    }

    if(message.length >= 25) {
        statusMessage.append("<div class='valid'> Message is valid </div>")
    } else {
        statusMessage.append("<div class='not-valid'> Message needs to be 25 characters or more </div>")
    }
    
  })
})






