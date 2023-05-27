function func1(event) {
    event.preventDefault()
    let user = document.getElementById("username-input").value
    let firstname = document.getElementById("firstname-input").value
    let lastname = document.getElementById("lastname-input").value
    let email = document.getElementById("email-input").value
    let privatenum = document.getElementById("privatenum-input").value
    let password = document.getElementById("password-input").value
    

    if(!validation(email))
{
  email_error.style.display = "block"
  password_error.style.display = "block"
  username_error.style.display = "block"
  lastname_error.style.display = "block"
  firstname_error.style.display = "block"
  privatenum_error.style.display = "block"
  return
}
    
    fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
     body: JSON.stringify({
     "userName": user,
     "firstName": firstname,
     "lastName": lastname,
     "email": email,
     "privateNumber": privatenum,
     "password": password,
     "active": true})
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))   
}


let user = document.getElementById("username-input").value
let firstname = document.getElementById("firstname-input").value
let lastname = document.getElementById("lastname-input").value
let email = document.getElementById("email-input").value
let privatenum = document.getElementById("privatenum-input").value
let password = document.getElementById("password-input").value
let lastname_error = document.getElementById("lastname-error")
let username_error = document.getElementById("username-error")
let password_error = document.getElementById("password-error")
let email_error = document.getElementById("email-error")
let privatenum_error = document.getElementById("privatenum-error")
let firstname_error = document.getElementById("firstname-error")
let regex = /\d/;
let doesItHaveNumber = regex.test(user);

function validation(email1){
if(email.length < 9 , email == Number){
  return false
}else if (password.length < 8) {
  return false
}else if (privatenum.length < 12) {
    return false
}else if (lastname == Number) {
    return false
}else if (firstname == Number) {
    return false
}else if (user.doesItHaveNumber) {
    return false
}
return true
}