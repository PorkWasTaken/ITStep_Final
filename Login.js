function func2() {
  // event.preventDefault()

  let email=document.getElementById('email-login-input').value
  let password=document.getElementById('password-login-input').value

  fetch('http://kketelauri-001-site1.gtempurl.com/api/user/login', {
  method: 'POST',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
  },
   body: JSON.stringify({
   "email": email,
   "password": password})
  })
  .then(response => response.json())
  .then(response => {console.log(JSON.stringify(response))
  
  
  
  })
  .catch(response => console.log("error")) 
}
  