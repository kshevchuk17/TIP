let viewport = document.getElementById("viewport").offsetWidth;
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");
let slider = document.querySelector("div.slider");
let viewSliders = document.querySelectorAll(".viewSlide");
let viewSlide = 0;

viewSliders[0].style.backgroundColor = "green";

btnNext.addEventListener("click", function () {
  viewSliders[viewSlide].style.backgroundColor = "red";
  if (viewSlide < 4) {
    viewSlide++;
  } else {
    viewSlide = 0;
  }
  viewSliders[viewSlide].style.backgroundColor = "green";
  slider.style.left = -viewSlide * viewport + "px";
});

btnPrev.addEventListener("click", function () {
  viewSliders[viewSlide].style.backgroundColor = "red";
  if (viewSlide > 0) {
    viewSlide--;
  } else {
    viewSlide = 4;
  }
  viewSliders[viewSlide].style.backgroundColor = "green";
  slider.style.left = -viewSlide * viewport + "px";
});

const values = {
  img1: "./bobr.jpeg",
  img2: "./koala.jpeg",
  img3: "./lamb.jpeg",
  img4: "./monkey.jpeg",
  img5: "./rabbit.jpeg",
};

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

for (let i = 0; i < 5; i++) {
  const img = document.getElementById(`img${i + 1}`);
  document.cookie = `img${i + 1}=${values[`img${i + 1}`]}`;
  img.src = getCookie(`img${i + 1}`);
}
