function getMembershipLevel(level){
    switch (level){
        case 1: return "Member";
        case 2: return "Silver";
        case 3: return "Gold";
        default: return "Unknown";
    };
};
async function displayMembers(){
    memberContainer = document.querySelector("#membersContainer");
    try{
        const response = await fetch("data/members.json");
        const members = await response.json();
        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card");
            memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h2>${member.name}</h2>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
            <p><strong>Membership Level:</strong> ${getMembershipLevel(member.membership_level)}</p>
            <p><strong>Description:</strong> ${member.description}</p>
            `;
            memberContainer.appendChild(memberCard);
        });
    } catch (error){
        console.error("Error fetching member data", error);
        memberContainer.innerHTML = "<p>Failed to load member data.</p>";
    };
};
displayMembers();