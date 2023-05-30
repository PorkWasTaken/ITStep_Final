let toggleBtn = document.querySelector('#Bar')
let toggleBtnIcon = document.querySelector('#Bar i')
let dropDownMenu = document.querySelector('.dropdown_menu')

$(toggleBtn).click(
    function (){
        dropDownMenu.classList.toggle('open')
        let isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
    } 
)


const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
  const welcomeMessage = document.getElementById('welcome-message');
  welcomeMessage.textContent = `Welcome, ${loggedInUser.userName}!`;
} else {
  window.location.href = 'login.html';
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'login.html';
}
