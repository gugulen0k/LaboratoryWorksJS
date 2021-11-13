let slides = document.getElementsByClassName("item");
let images = document.querySelector(".images").getElementsByTagName("img");
let imagesDiv = document.querySelector(".images");

imagesDiv.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    const number = parseInt(e.target.dataset.position);
    currentSlide(number);
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
  if (slideIndex === slides.length) {
    return;
  } else showSlides((slideIndex += 1));
}

function previousSlide() {
  if (slideIndex === 1) {
    return;
  } else showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let image of images) {
    image.style.borderColor = "transparent";
  }
  images[slideIndex - 1].style.borderColor = "#ff4141";
  slides[slideIndex - 1].style.display = "block";
}
