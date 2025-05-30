const button = document.querySelector("#button");

const audio = document.getElementById("mySound");

let i = 0;

document.addEventListener("click", function () {
	document.querySelector("body").style.backgroundImage = "url(./images.jpg)";
	audio.play();
	button.style.display = "none";
});
