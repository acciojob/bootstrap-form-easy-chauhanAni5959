// Bootstrap validation
(function () {
  'use strict'

  // Fetch the form
  const form = document.getElementById('internship-form');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }
    form.classList.add('was-validated')
  }, false)
})();
