(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()

 var name = document.getElementByIdClassName("form-body")
    console.log("name")
    console.log("email")
    console.log("position")
    console.log("password")


function submit() {
    console.log("diar")
    console.log("diarlimani20@gmail.com")
    console.log("project manager")
    console.log("diarlimani")

}




