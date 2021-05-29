

$(document).ready(function () {
  $('#submit').click(function (event) {
    event.preventDefault()
    console.log('Clicked button')

    var name = $('#name').val()
    var email = $('#email').val()
    var message = $('#message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(name.length > 2) {
        statusElm.append("<div> Name is valid </div>" ) 
    } else {
        statusElm.append("<div> Name is not valid </div>")
        document.getElementsByClassName("status").style.color = "#ff0000";
    }

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append("<div> Email is valid </div>")
    } else {
        statusElm.append("<div> Email is not valid </div>")
    }

    if(message.length > 10) {
        statusElm.append("<div> Message is valid </div>")
    } else {
        statusElm.append("<div> Message is not valid </div>")
    }
    
  })
})
