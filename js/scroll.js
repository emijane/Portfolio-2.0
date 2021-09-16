// Scrolls container into view on arrow click
const arrow = document.getElementById("arrow_down");

arrow.addEventListener("click", function () {
	document.getElementById("about").scrollIntoView({
		behavior: "smooth",
	});
});

// Scroll into view on click
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const contact = document.getElementById("contact-btn");

home.addEventListener("click", function () {
	document.getElementById("home").scrollIntoView({
		behavior: "smooth",
	});
});

about.addEventListener("click", function () {
	document.getElementById("about").scrollIntoView({
		behavior: "smooth",
	});
});

contact.addEventListener("click", function () {
	document.getElementById("contact").scrollIntoView({
		behavior: "smooth",
	});
});
