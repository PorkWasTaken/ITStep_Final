let products = {
  data: [
    {
      category:"Destinations",
      place: "Big",
      destination: "California, USA",
      image: "img/img1.png"
    },
    {
      category:"Destinations",
      place: "Prescott",
      destination: "Arizona, USA",
      image: "img/img2.png"
    },
    {
      category:"Destinations",
      place: "Fort Mayers",
      destination: "Florida, USA",
      image: "img/img3.png"
    },
    {
      category:"Destinations",
      place: "Tucson",
      destination: "Arizona, USA",
      image: "img/img4.png"
    },
    {
      category:"Destinations",
      place: "St. Joseph",
      destination: "Michigan, USA",
      image: "img/img5.png"
    },
    {
      category:"Destinations",
      place: "Madrid",
      destination: "Spain",
      image: "img/img6.png"
    },
    {
      category:"Hotels",
      place: "Monastero Santa Rosa Hotel & Spa",
      destination: "Salerno, Italy",
      image: "img/img7.png"
    },
    {
      category:"Hotels",
      place: "Grand Hotel Tremezzo",
      destination: "Lake Como, Italy",
      image: "img/img8.png"
    },
    {
      category:"Hotels",
      place: "The Oberoi Udaivilas, Udaipur",
      destination: "Udaipur, India",
      image: "img/img9.png"
    },
    {
      category:"Hotels",
      place: "AKA Beverly Hills",
      destination: "Los Angeles, United States",
      image: "img/img10.png"
    },
    {
      category:"Tips",
      place: "East Village Ice Cream Crawl",
      destination: "East Village",
      image: "img/img11.png"
    },
    {
      category:"Tips",
      place: "Brooklyn Bridge cinematic photo walk",
      destination: "Brooklyn Bridge",
      image: "img/img12.png"
    },
    {
      category:"Activities",
      place: "Sailing",
      destination: "Sea",
      image: "img/img13.png"
    },
    {
      category:"Activities",
      place: "Climbing",
      destination: "Mountain",
      image: "img/img14.png"
    },
    {
      category:"Activities",
      place: "Skiing",
      destination: "Mountain",
      image: "img/img15.png"
    },
    {
      category:"Activities",
      place: "Hiking",
      destination: "Mountain",
      image: "img/img16.png"
    },

  ],
};
for (let i of products.data) {
  let card = document.createElement("div");
  let book = document.createElement("button")
  book.textContent = "Book Place";
  book.classList.add("button")
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h5");
  name.classList.add("place");
  name.innerText = i.place.toUpperCase();
  container.appendChild(name);
  let destination = document.createElement("h6");
  destination.innerText = i.destination;
  container.appendChild(destination);
  card.appendChild(container);
  card.appendChild(book)
  document.getElementById("places").appendChild(card);
}
function filterProduct(value) {
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });
});

function closePopup() {
  const dateInput = document.getElementById("date-input");
  if (dateInput.value === "") {
    alert("Please input a date!");
  } else {
    alert("Added Successfully!");
    document.getElementById("popup").style.display = "none";
  }
}


