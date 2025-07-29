const scriptURL = 'https://script.google.com/macros/s/AKfycbypLvz5Kb9wfpi6MjxYJkmnJv__oI5xLt9S6mXH5adt_hvS2D_d-M-R2jiaWS1IuudK/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})