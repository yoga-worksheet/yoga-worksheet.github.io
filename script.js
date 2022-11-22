const indicators = document.querySelectorAll(".nav__bullet");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
	sections.forEach((section, index) => {
		const onSection =
			window.scrollY >= section.offsetTop &&
			window.scrollY < section.offsetTop + section.offsetHeight / 2;
		if (onSection) {
			indicators.forEach((indicator) =>
				indicator.classList.remove("active")
			);
			indicators[index].classList.add("active");
		}
	});
});

indicators.forEach((indicator, index) => {
	indicator.addEventListener("click", () => {
		window.scroll(0, sections[index].offsetTop);
	});
});
