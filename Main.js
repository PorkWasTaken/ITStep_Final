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