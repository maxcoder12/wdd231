let products = [];

const select = document.querySelector("#category");
const productOp = document.querySelector("#product-options");
const totalPrice = document.querySelector("#totalPrice");
const orderform = document.querySelector("#order-form");
const confDialog = document.querySelector("#confirmation");

orderform.addEventListener("submit", (e) =>{
	e.preventDefault();
	confDialog.showModal();

	setTimeout(() =>{
		window.location.href = "index.html";
	}, 3000)
});

select.addEventListener("change", (e) =>{
	const category = e.target.value;

	productOp.innerHTML = "";

	const filteredProducts = products.filter(product => product.category === category);

	filteredProducts.forEach(product =>{
		const label = document.createElement("label");
		const input =document.createElement("input");

		label.innerHTML = `
			${product.name} - $${product.price.toFixed(2)}
			<input class="quantity-input" type="number" name="quantity" min="0" max="100" value="0" step="1">
			$<span class="total-price">${0.00}</span>
		`;

		const quantityInput = label.querySelector("input.quantity-input");
		const totalPriceSpan = label.querySelector("span.total-price");

		quantityInput.addEventListener("input", (e) => {
			const quantity = parseInt(e.target.value) || 0;
			const total = quantity * product.price;
			totalPriceSpan.textContent = `${total.toFixed(2)}`;

			const allPrices = document.querySelectorAll(".total-price");

			let totalAmount = 0;
		
			allPrices.forEach(priceEle => {
				const price = parseFloat(priceEle.textContent);
				console.log(priceEle.textContent);
				totalAmount += price;
			});
		
			totalPrice.textContent = `${totalAmount.toFixed(2)}`;
		});


		productOp.appendChild(label);
		productOp.appendChild(document.createElement("br"));
	});
});

async function fetchUsers(){
  try {
    const response = await fetch("data/product.json");
    const data = await response.json();
    console.log(data);
    if (response.ok){
      products = data;
    } else{
      console.log(response.status);
    };
  } catch(error){
    console.log("There was an error loading the data:", error);
  };
};

fetchUsers();