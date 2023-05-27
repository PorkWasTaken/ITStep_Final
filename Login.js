function func2() {

  let email=document.getElementById('email-login-input').value
  let password=document.getElementById('password-login-input').value

if(!validation(email))
{
  email_error.style.display = "block"
  password_error.style.display = "block"
  return
}
  fetch('https://kketelauri-001-site1.gtempurl.com/api/user/login', {
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

let email1=document.getElementById('email-login-input').value
let password1=document.getElementById('password-login-input')
let email_error = document.getElementById("email-error")
let password_error = document.getElementById("password-error")

function validation(email1){
if(email1.length < 9){
  return false
}else if (password1.length < 8) {
  return false
}
return true
}
