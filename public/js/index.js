$('#check').on('submit', function(event){    
    if (isValidString($('#inputStr').val())) {
        $("#error").text("")
        $('#check').submit()
    } else {
        event.preventDefault()
        $("#error").text("El string ingresado no es válido")
    }
})

validate = () => {    
    if (isValidString($('#inputStr').val())) $("#error").text("")
    else $("#error").text("El string ingresado no es válido")
}

isValidString = (str) => {
    return (/^[a-zA-Z]*$/).test(str)
}