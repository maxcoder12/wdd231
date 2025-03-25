const gridBt = document.querySelector("#gridButton");
const oneClBt = document.querySelector("#oneColumn");
const memberCt = document.querySelector("#membersContainer");
const memberCards = document.querySelectorAll("#membersContainer div");
gridBt.addEventListener("click", () =>{
    memberCt.style.flexDirection = "row";
});
oneClBt.addEventListener("click", () =>{
    memberCt.style.flexDirection = "column";
});