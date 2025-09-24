(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()

      if (!form.checkValidity()) {
        form.classList.add('was-validated')
        return
      }

      form.classList.add('was-validated')
      jumpLogin()
    }, false)
  })
})()

function jumpLogin() {
  const toastLiveExample = document.getElementById('liveToast');
  if (!toastLiveExample) {
    window.location.href = "login.html";
    return;
  }

  const toast = new bootstrap.Toast(toastLiveExample);
  toast.show();

  toastLiveExample.addEventListener('hidden.bs.toast', () => {
    window.location.href = "login.html";
  }, { once: true });

  setTimeout(() => {
    window.location.href = "login.html";
  }, 3000);
}
