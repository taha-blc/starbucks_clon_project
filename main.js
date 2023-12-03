//variables

const bigImg = document.querySelector(".starbucks");
const bgColor = document.querySelector(".circle");
const coffeeBtn1 = document.querySelector("#btn-1");
const coffeeBtn2 = document.querySelector("#btn-2");
const coffeeBtn3 = document.querySelector("#btn-3");

coffeeBtn1.addEventListener("click", function () {
  bigImg.src = "img1.png";
  bigImg.style.width = "420px";
  bgColor.style.backgroundColor = "green";
});
coffeeBtn2.addEventListener("click", function () {
  bigImg.src = "img2.png";
  bigImg.style.width = "420px";
  bgColor.style.backgroundColor = "pink";
});
coffeeBtn3.addEventListener("click", function () {
  bigImg.src = "img3.png";
  bigImg.style.width = "420px";
  bgColor.style.backgroundColor = "purple";
});
/**/
function toggleMenu() {
  let menuToogle = document.querySelector(".toggle");
  let navigation = document.querySelector(".navigation");
  menuToogle.classList.toggle("active");
  navigation.classList.toggle("active");
}
