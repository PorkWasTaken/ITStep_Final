function func2() {
  let email = document.getElementById('email-login-input').value;
  let password = document.getElementById('password-login-input').value;

  fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
  .then(response => response.json())
  .then(response => {
    console.log(JSON.stringify(response));
    localStorage.setItem('loggedInUser', JSON.stringify(response));
    window.location.href = 'index.html';
    let login = true
  })
  .catch(response => console.log("error"));
}
