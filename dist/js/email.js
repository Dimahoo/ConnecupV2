console.log('It works')

$(document).ready(function () {

    $('.submit').click(function (event) {
        console.log('Clicked button')

        var firstName = $('.firstName').val()
        var lastName = $('.lastName').val()
        var email = $('.email').val()
        var phone = $('.phone').val()
        var message = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if (lastName.length < 2) {
            event.preventDefault()
            statusElm.append('<div id="alert" data-aos="fade-left">Merci de saisir un nom valide</div>')
        } else {
            if (firstName.length < 2) {
                event.preventDefault()
                statusElm.append('<div id="alert" data-aos="fade-left">Merci de saisir un prénom valide</div>')
            } else {
                if (email.length < 5 && !email.includes('@') && !email.includes('.')) {
                    event.preventDefault()
                    statusElm.append('<div id="alert" data-aos="fade-left">Merci de saisir un email valide</div>')
                } else {
                    if (phone.length < 2) {
                        event.preventDefault()
                        statusElm.append('<div id="alert" data-aos="fade-left">Merci de saisir un numéro de téléphone valide</div>')
                    } else {
                        if (message.length < 20) {
                            event.preventDefault()
                            statusElm.append('<div id="alert" data-aos="fade-left">Votre message doit comporter plus de 20 caractères</div>')
                        }
                    }
                }
            }
        }


        document.getElementById('alert').style.color = 'red'

    })
})