const showMenu = document.querySelector("#showMenu");
const menu = document.querySelector("#menu");

showMenu.addEventListener("click", () => {
	menu.classList.toggle("showed");

	if (showMenu.textContent != "x"){
		showMenu.textContent = "x"
	} else{
		showMenu.textContent = "☰";
	}

});