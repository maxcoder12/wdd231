const toggleButton = document.querySelector("#showMenu");
const menu = document.querySelector("#menu");

toggleButton.addEventListener("click", () =>{

    if (menu.style.display === "none"){
        menu.style.display = "flex";
        toggleButton.textContent = "^"
        setTimeout(()=>{
            menu.style.transform = "translateY(0%)";
        }, 200);
    } else{
        toggleButton.textContent = "v"
        menu.style.transform = "translateY(-100%)";
        setTimeout(()=>{
            menu.style.display = "none";
        }, 300);
    }

});