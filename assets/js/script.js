// Selected Buttons and inputs.
const fileInput = document.querySelector(".file-input"),
  progressInput = document.querySelector("input[type = 'range']"),
  filterOption = document.querySelectorAll(".right li"),
  quickAccess = document.querySelectorAll(".left li");

// Selected Progress information.
let filterName = document.querySelector(".filter-info .name");
let filterValue = document.querySelector(".filter-info .value");
let previewImage = document.querySelector(".preview-img img");

// Values were set for filter properties
let brightness = "100",
  saturation = "100",
  inversion = "0",
  grayScale = "0";

// This is a function for uploading photos
const loadImage = () => {
  let file = fileInput.files[0];
  console.log(file);

  if (!file) return;

  previewImage.src = URL.createObjectURL(file);

  previewImage.addEventListener("load", () => {
    quickAccess[2].click();
    document.querySelector(".right").classList.remove("disable");
    document.querySelector("footer").classList.remove("disable");
    document.querySelector(".preview-img").classList.remove("disable");
  });
};

// click + button
quickAccess[0].addEventListener("click", () => fileInput.click());
//--
fileInput.addEventListener("change", loadImage);
