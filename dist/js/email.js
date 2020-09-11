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

        if (email.length < 5 && !email.includes('@') && !email.includes('.')) {
            event.preventDefault()
            document.getElementById('msg').style.height = "610px"
            statusElm.append('<div id="alert" data-aos="fade-left">Email non valide</div>')
        } else {

            if (firstName.length < 2) {
                event.preventDefault()
                document.getElementById('msg').style.height = "610px"
                statusElm.append('<div id="alert" data-aos="fade-left">Prénom non valide</div>')
            } else {

                if (lastName.length < 2) {
                    event.preventDefault()
                    document.getElementById('msg').style.height = "610px"
                    statusElm.append('<div id="alert" data-aos="fade-left">Nom nom valide</div>')
                } else {

                    if (phone.length < 2) {
                        event.preventDefault()
                        document.getElementById('msg').style.height = "610px"
                        statusElm.append('<div id="alert" data-aos="fade-left">Numéro de téléphone non valide</div>')
                    } else {

                        if (message.length < 20) {
                            event.preventDefault()
                            document.getElementById('msg').style.height = "610px"
                            statusElm.append('<div id="alert" data-aos="fade-left">Message doit comporter plus de 20 caractères</div>')
                        }
                    }
                }
            }
        }

        document.getElementById('alert').style.color = 'red'

    })
})