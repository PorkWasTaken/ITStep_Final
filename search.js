let products = {
  data: [
    {
      category:"Destinations",
      place: "Big",
      destination: "California, USA",
      image: "img1.png"
    },
    {
      category:"Destinations",
      place: "Prescott",
      destination: "Arizona, USA",
      image: "img2.png"
    },
    {
      category:"Destinations",
      place: "Fort Mayers",
      destination: "Florida, USA",
      image: "img3.png"
    },
    {
      category:"Destinations",
      place: "Tucson",
      destination: "Arizona, USA",
      image: "img4.png"
    },
    {
      category:"Destinations",
      place: "St. Joseph",
      destination: "Michigan, USA",
      image: "img5.png"
    },
    {
      category:"Destinations",
      place: "Madrid",
      destination: "Spain",
      image: "img6.png"
    },
    {
      category:"Hotels",
      place: "Monastero Santa Rosa Hotel & Spa",
      destination: "Salerno, Italy",
      image: "img7.png"
    },
    {
      category:"Hotels",
      place: "Grand Hotel Tremezzo",
      destination: "Lake Como, Italy",
      image: "img8.png"
    },
    {
      category:"Hotels",
      place: "The Oberoi Udaivilas, Udaipur",
      destination: "Udaipur, India",
      image: "img9.png"
    },
    {
      category:"Hotels",
      place: "AKA Beverly Hills",
      destination: "Los Angeles, United States",
      image: "img10.png"
    },
    {
      category:"Tips",
      place: "East Village Ice Cream Crawl",
      destination: "East Village",
      image: "img11.png"
    },
    {
      category:"Tips",
      place: "Brooklyn Bridge cinematic photo walk",
      destination: "Brooklyn Bridge",
      image: "img12.png"
    },
    {
      category:"Activities",
      place: "Sailing",
      destination: "Sea",
      image: "img13.png"
    },
    {
      category:"Activities",
      place: "Climbing",
      destination: "Mountain",
      image: "img14.png"
    },
    {
      category:"Activities",
      place: "Skiing",
      destination: "Mountain",
      image: "img15.png"
    },
    {
      category:"Activities",
      place: "Hiking",
      destination: "Mountain",
      image: "img16.png"
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
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {

    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
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

// Add event listener to the button with class "button"
let buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    // Show the popup div
    document.getElementById("popup").style.display = "block";
  });
});

// Close the popup div
// Close the popup div and display appropriate alerts
function closePopup() {
  const dateInput = document.getElementById("date-input");
  if (dateInput.value === "") {
    alert("Please input a date!");
  } else {
    alert("Added Successfully!");
    document.getElementById("popup").style.display = "none";
  }
}


