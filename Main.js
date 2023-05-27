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


let objects=[
    {
        img:"img1.png",
        title:"Big Sur",
        location:"California, USA"
    },
    {
        img:"img2.png",
        title:"Prescott",
        location:"Arizona, USA"
    },
    {
        img:"img3.png",
        title:"Fort Mayers",
        location:"Florida, USA"
    },
    {
        img:"img4.png",
        title:"Tucson",
        location:"Arizona, USA"
    },
    {
        img:"img5.png",
        title:"ST. Joseph",
        location:"Michigan, USA"
    },
    {
        img:"img6.png",
        title:"Madrid",
        location:"Spain"
    },
    {
        img:"img7.png",
        title:"Monastero Santa Rosa Hotel & Spa",
        location:"Salerno, Italy"
    },
    {
        img:"img8.png",
        title:"Grand Hotel Tremezzo",
        location:"Lake Como, Italy"
    },
    {
        img:"img9.png",
        title:"The Oberoi Udaivilas, Udaipur",
        location:"Udaipur, India"
    },
    {
        img:"img10.png",
        title:"AKA Beverly Hills",
        location:"Los Angeles, United States"
    },
    {
        img:"img11.png",
        title:"East Village Ice Cream Crawl",
        description:"We will stop at five different world-class ice cream shops on this 1.5 mile 1.5hour tour. At each ice cream store we'll explore the story behind the buisness and see what makes the ice cream uniqe as you savor every..."
    },
    {
        img:"img12.png",
        title:"Brooklyn Bridge cinematic photo walk",
        description:"This experience takes place at the Brooklyn Bridge Park and Brooklyn Bridge, but I’m always open to capture clients at different locations upon request for an additional charge. "
    },
    {
        img:"img13.png",
        title:"Sailing",
    },
    {
        img:"img14.png",
        title:"Climbing",
    },
    {
        img:"img15.png",
        title:"Skiing",
    },
   {
        img:"img16.png",
        title:"Hiking",
    },
    {
        img:"img17.png",
        title:"About Us",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sapien justo. Nulla facilisis tristique imperdiet. Nullam a placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit amet ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
    }
]


