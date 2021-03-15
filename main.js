const button = document.querySelector(".btn");
const searchContainer = document.querySelector(".search");

button.addEventListener("click", function () {
  searchContainer.classList.toggle("active");
});
