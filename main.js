(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  toastTrigger.addEventListener('click', (event) => {
    event.preventDefault(); // form submit bo‘lmasin

    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();

    toastLiveExample.addEventListener('hidden.bs.toast', () => {
      window.location.href = "login.html";
    }, { once: true });

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });
}