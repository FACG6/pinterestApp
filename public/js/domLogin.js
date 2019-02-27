const logIn = document.querySelector('#loginBtn');

logIn.addEventListener('click', (t) => {
    t.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const data = {
        username,
        password,
    }
    fetch('/login',
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json '
            }
        })
        .then(() => window.location.href = '/')
        .catch(err => console.log(err));
})
// window.location ='/'