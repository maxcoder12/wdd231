const form = document.querySelector("#my-form");
const time = document.querySelector("#timestamp");

const now = new Date();
const formattedDate = now.toLocaleString();

time.value = formattedDate;


function validateForm(){

    const inputs = form.querySelectorAll("input, textarea, select");

    inputs.forEach(input =>{
        if (input.value.trim() === ''){
            input.classList.remove("filled");
            input.classList.add("required");
        } else{
            input.classList.remove("required");
            input.classList.add("filled");
        }
    });
}

form.addEventListener("input", validateForm);


