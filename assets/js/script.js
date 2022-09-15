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

  if (!file) return;

  previewImage.src = URL.createObjectURL(file);

  previewImage.addEventListener("load", () => {
    quickAccess[2].click();
    document.querySelector(".right").classList.remove("disable");
    document.querySelector("footer").classList.remove("disable");
    document.querySelector(".preview-img").classList.remove("disable");
  });
};

// The given value is applied
const applyFilter = () => {
  previewImage.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayScale}%)`;
};

// Control buttons are recognized and activated by clicking and their information is displayed
filterOption.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");

    option.classList.add("active");

    switch (option.id) {
      case "brightness": {
        progressInput.max = "200";
        progressInput.value = brightness;
        filterValue.innerText = `${brightness}%`;
        break;
      }

      case "saturation": {
        progressInput.max = "200";
        progressInput.value = saturation;
        filterValue.innerText = `${saturation}%`;
        break;
      }

      case "inversion": {
        progressInput.max = "100";
        progressInput.value = inversion;
        filterValue.innerText = `${inversion}%`;
        break;
      }

      case "grayScale": {
        progressInput.max = "100";
        progressInput.value = grayScale;
        filterValue.innerText = `${grayScale}%`;
        break;
      }
    }
  });
});

// It is a function to register the process value in the filter properties
const updateFilter = () => {
  filterValue.innerHTML = `${progressInput.value}%`;
  const selectFilter = document.querySelector(".right .active");

  switch (selectFilter.id) {
    case "brightness": {
      brightness = progressInput.value;
      break;
    }

    case "saturation": {
      saturation = progressInput.value;
      break;
    }

    case "inversion": {
      inversion = progressInput.value;
      break;
    }

    case "grayScale": {
      grayScale = progressInput.value;
      break;
    }
  }

  applyFilter();
};

// It is related to the reset button. Whenever it is clicked, the changes revert back to the original version
const resetFilter = () => {
  brightness = "100";
  saturation = "100";
  inversion = "0";
  grayScale = "0";

  filterOption[0].click();

  applyFilter();
};

// By clicking on the Delete button, the selected photo is deleted and the changes are returned to the original state
const deletePhoto = () => {
  quickAccess[2].click();
  previewImage.src = "";
};

// click + button
quickAccess[0].addEventListener("click", () => fileInput.click());
//--
fileInput.addEventListener("change", loadImage);
progressInput.addEventListener("input", updateFilter);
quickAccess[2].addEventListener("click", resetFilter);
quickAccess[1].addEventListener("click", deletePhoto);
