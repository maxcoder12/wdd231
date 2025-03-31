const data = new URLSearchParams(window.location.search);

function displayInfo(){
    const title = document.querySelector("#title");
    const infoContainer = document.querySelector("#info-container");

    title.textContent = `Welcome to Chambery!!`;

    infoContainer.innerHTML = `
    <p>First Name: ${data.get("first_name")}</p>
    <p>Last Name: ${data.get("last_name")}</p>
    <p>Email: ${data.get("email")}</p>
    <p>Mobile Number: ${data.get("phone")}</p>
    <p>Business Name: ${data.get("org_name")}</p>
    <p>Current Date: ${data.get("timestamp")}</p>
    `;
}

displayInfo();


let i = 5; 
function returnBack(){
    let secondsLeft = document.querySelector("#seconds-left");

    secondsLeft.textContent = i;
    if(i === 0){
        window.location.href = "join.html";
    } else{
        i--;
    }
}
setInterval(returnBack, 1000);