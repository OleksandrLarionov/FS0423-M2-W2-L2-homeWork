const firstFourImages = document.getElementsByClassName("article_four");
const lastSixImages = document.getElementsByClassName("central_content");

const press = document.getElementById("press");
const six = document.getElementById("six");
console.log(six);
console.log(lastSixImages);
press.addEventListener("click", (e) => {
	firstFourImages[0].classList.toggle("d-none");
});
six.addEventListener("click", (e) => {
	lastSixImages[0].classList.toggle("d-none");
});
