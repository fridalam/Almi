const menuListEl = document.querySelector("#menuList");
const hamburgerBarsEl = document.querySelector(".hamburgerBars");
const menuItems = document.querySelectorAll(".menuItem");

// hamburger menu toggler
const toggleMenu = () => {
	if (menuListEl.style.display === "block") {
		menuListEl.style.display = "none";
		menuListEl.classList.remove("showMenu");
	} else {
		menuListEl.style.display = "block";
		menuListEl.classList.add("showMenu");
	}
};

// click event for hamburger icon
hamburgerBarsEl.addEventListener("click", () => {
	toggleMenu();
});

// action for when clicking items in hamburger menu
menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", toggleMenu);
});