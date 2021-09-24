let listItems = Array.from(document.querySelectorAll(".reveal"));

const isInViewport = function (element) {
	const viewportHeight = window.innerHeight;
	const elementTop = element.getBoundingClientRect().top;
	const elementHeight = element.getBoundingClientRect().height;
    console.log(viewportHeight, elementTop, elementHeight);
	return elementTop < viewportHeight && elementTop > -elementHeight ?
		true :
		false;
};

function checkReveals() {
  listItems.forEach(element => {
		if (isInViewport(element)) {
			if (!element.classList.contains("reveal_active")) {
				element.classList.add("reveal_active");
			}
		} else {
			if (element.classList.contains("reveal_active")) {
				element.classList.remove("reveal_active");
			}
		}
	});
}

window.addEventListener("scroll", checkReveals);
