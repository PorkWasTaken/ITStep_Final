function func1(event) {
    event.preventDefault()
    let user = document.getElementById("username-input").value
    let firstname = document.getElementById("firstname-input").value
    let lastname = document.getElementById("lastname-input").value
    let email = document.getElementById("email-input").value
    let privatenum = document.getElementById("privatenum-input").value
    let password = document.getElementById("password-input").value
    
    
    fetch('http://kketelauri-001-site1.gtempurl.com/api/user/adduser', {
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