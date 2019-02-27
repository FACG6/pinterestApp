const homeInpt = document.querySelector('input[name="url"]');
const homeLoginLink = document.querySelector('.header--login--btn');
const homesigUpLink = document.querySelector('.header--signUp--btn');
const addImgeBtn = document.querySelector('#addImgeBtn');

addImgeBtn.addEventListener('click', ()=>{
    fetch('/addImg', {
        method: 'POST',
        credentials : 'same-origin',
        body: JSON.stringify({ url: homeInpt.value}),
        headers: {'Content-Type': 'application/json'}
      })
})

