const conform = document.querySelector("#contactForm");
const confirmation = document.querySelector("#confirmation");

conform.addEventListener("submit", (e) =>{
	e.preventDefault();
	confirmation.showModal();
	setTimeout(()=>{
		window.location.href = "index.html";
	}, 3000);
});