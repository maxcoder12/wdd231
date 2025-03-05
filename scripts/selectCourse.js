const allButton = document.querySelector("#allButton");
const cseButton = document.querySelector("#cseButton");
const wddButton = document.querySelector("#wddButton");

const coursesList = document.querySelectorAll("#coursesList li");

allButton.addEventListener("click", () =>{
    allButton.classList.add("selected-button");
    cseButton.classList.remove("selected-button");
    wddButton.classList.remove("selected-button");
    coursesList.forEach(item =>{
        item.classList.remove("selected-button");
    });
});

cseButton.addEventListener("click", () =>{
    cseButton.classList.add("selected-button");
    allButton.classList.remove("selected-button");
    wddButton.classList.remove("selected-button");
    coursesList.forEach(item =>{
        if (item.id.startsWith("cse")){
            item.classList.add("selected-button");
        } else{
            item.classList.remove("selected-button");
        };
    });
});

wddButton.addEventListener("click", () =>{
    wddButton.classList.add("selected-button");
    allButton.classList.remove("selected-button");
    cseButton.classList.remove("selected-button");
    coursesList.forEach(item =>{
        if (item.id.startsWith("wdd")){
            item.classList.add("selected-button");
        } else{
            item.classList.remove("selected-button");
        };
    });
});