// Scrolls container into view on arrow click
const arrow = document.getElementById("arrow_down");

arrow.addEventListener("click", function () {
	document.getElementById("about").scrollIntoView({
		behavior: "smooth",
	});
	console.log("hi");
});
