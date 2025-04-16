const aperit = document.querySelector("#appetizers");
const mainD = document.querySelector("#main-dishes");
const dess = document.querySelector("#desserts");

function displayProduct(data){
  console.log(data.length);
  let i = 0;
  data.forEach((product) => {
    const div = document.createElement("div");

    div.classList.add("menu-item");

    div.innerHTML = `
      <img loading="lazy" width="300" height="300" src="${product.image}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <span>Price: $${product.price}</span>
      <button class="green-button">Order</button>

    `;

    switch(product.category){
      case "Desserts":
        dess.appendChild(div);
        break;
      case "Main Dishes":    
        mainD.appendChild(div);
        break;
      case "Aperitives":
        aperit.appendChild(div);
        break;
    };

    i++;
  });
};

async function fetchProducts(){
  try {
    const response = await fetch("data/product.json");
    const data = await response.json();
    if (response.ok){
      displayProduct(data);
    } else{
      console.log(response.status);
    };
  } catch(error){
    console.log("There was an error loading the data:", error);
  };
};

fetchProducts();
