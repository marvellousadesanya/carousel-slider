// Declaring variables
let images = document.querySelectorAll("#carousel-container img");
let heading = document.querySelector("h1"); // not used yet

let buttons = document.querySelector("#arrow-container"); //buttons

const prev = document.getElementById("prevBtn"); //button to move back
const next = document.getElementById("nextBtn"); // button to move forward
const slider = document.querySelector("#carousel-container"); // Slider

//For displaying the prev and next buttons on hover
// Using loop to loop through querySelectorAll
for (i = 0; i < images.length; ++i) {
  // On hover
  images[i].addEventListener("mouseover", () => {
    buttons.style.display = "flex";
    buttons.style.zIndex = "10";
    // buttons.style.cursor = "pointer";
  });

  // When not hovering. Remove arrows
  images[i].addEventListener("mouseout", () => {
    buttons.style.display = "none";
  });
}

let index = 0;
let width = images[index].clientWidth;

next.addEventListener("click", () => {
  index++;
  slider.style.transform = `translate(${-index * width}px)`;

  // Takes the slider back to the first
  if (index == images.length - 1) {
    index = 0;
  }
});

prev.addEventListener("click", () => {
  index--;
  slider.style.transform = `translate(${-index * width}px)`;

  // Takes the slider to the last slide
  if (index == 0) {
    index = images.length - 1;
  }
});
