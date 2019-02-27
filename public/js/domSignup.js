const send = document.querySelector('#signUpBtn');
send.addEventListener('click',(t)=>{
    const fullname = document.querySelector('#fullName').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const confirmPass = document.querySelector('#confirmPass').value;
    t.preventDefault();
    const data = {
        fullname,
        username,
        password,
    }
    if(password===confirmPass){
        fetch('/sign-up',
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json '
            }
        })
        .then(() => window.location.href = '/')
        .catch(err => console.log(err));
    }

})