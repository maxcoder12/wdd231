
async function displayMembers(){
    const memberContainer = document.querySelector("#membersContainer");

    try{
        const response = await fetch("data/members.json");
        const members = await response.json();
        
        let i = 0;
        members.forEach(member => {
            const memberDiv = document.createElement("div");
            if((member.membership_level == 2 || member.membership_level == 3) && i < 3){
                    memberDiv.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <h3>${member.name}</h3>
                    <span>${member.address}</span>
                    <span>${member.phone}</span>
                    <span>${member.description}</span>
                    <a target="_blank" class="button" href="${member.website}">Visit Website</a>
                `;
                memberContainer.appendChild(memberDiv);
                i++;
            };
        });
    } catch(error){
        console.error("Error fetching member data", error);
        memberContainer.innerHTML = "<p>Failed to load data</p>";
    };
};
displayMembers();