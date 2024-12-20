// API URL
const apiUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

// Elements
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const searchInput = document.getElementById('searchInput');
const checkoutButton = document.getElementById('checkoutButton');
const closeCartButton = document.getElementById('closeCartButton');
let currentPage = 1;
const productsPerPage = 10;


if (!productList || !cartItems || !searchInput || !checkoutButton || !closeCartButton) {
    console.error('Some DOM elements are missing. Please check your HTML.');
}

// Cart and products array
let cart = [];
let allProducts = [];

// Fetch products from the API
async function fetchProducts() {
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'flex'; // Show the spinner

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch products");
        allProducts = await response.json(); // Cache products
        displayProducts(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
        productList.innerHTML = "<p>Failed to load products. Please try again later.</p>";
    } finally {
        spinner.style.display = 'none'; // Hide the spinner
    }
}

function displayProducts(products) {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = products.slice(startIndex, endIndex);

    productList.innerHTML = ""; // Clear previous results

    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image_link || 'https://via.placeholder.com/150';
        productImage.alt = product.name;

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details');

        const productName = document.createElement('h4');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        const price = parseFloat(product.price) || 0;
        productPrice.textContent = price ? `$${price.toFixed(2)}` : "Price not available";

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description || "No description available.";

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.onclick = () => addToCart(product.name, price);

        detailsDiv.appendChild(productName);
        detailsDiv.appendChild(productPrice);
        detailsDiv.appendChild(productDescription);
        detailsDiv.appendChild(addToCartButton);

        productCard.appendChild(productImage);
        productCard.appendChild(detailsDiv);
        productList.appendChild(productCard);
    });

    createPaginationControls(products.length);
}


function createPaginationControls(totalProducts) {
    const paginationControls = document.getElementById('paginationControls');
    if (!paginationControls) {
        console.error("Pagination controls container not found.");
        return;
    }

    paginationControls.innerHTML = ""; // Clear existing controls

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-button');
        if (i === currentPage) {
            button.classList.add('active');
        }

        button.onclick = () => {
            currentPage = i;
            displayProducts(allProducts); // Refresh products for the selected page
        };

        paginationControls.appendChild(button);
    }
}


// Search products
function searchProducts() {
    const query = searchInput.value.toLowerCase();
    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(query)
    );
    displayProducts(filteredProducts);
    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p>No products found matching your search.</p>";
    }
}

// Add to cart
function addToCart(name, price) {
    if (!price) {
        alert("Price not available for this product.");
        return;
    }
    cart.push({ name, price, quantity: 1 });
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    updateCart();
}


function updateCart() {
    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.innerText = "Total: $0.00";
    } else {
        cartItems.style.display = 'block'; // Show the cart
        cartItems.innerHTML = ""; // Clear previous cart items
        let total = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            const itemDetails = document.createElement('p');
            itemDetails.textContent = `${item.name} - $${item.price.toFixed(2)}`;

            const quantityControls = document.createElement('div');
            quantityControls.classList.add('quantity-controls');

            const increaseButton = document.createElement('button');
            increaseButton.textContent = "+";
            increaseButton.onclick = () => changeQuantity(index, 1);

            const decreaseButton = document.createElement('button');
            decreaseButton.textContent = "-";
            decreaseButton.onclick = () => changeQuantity(index, -1);

            quantityControls.appendChild(decreaseButton);
            quantityControls.appendChild(increaseButton);

            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.onclick = () => removeFromCart(index);

            cartItem.appendChild(itemDetails);
            cartItem.appendChild(quantityControls);
            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });

        cartTotal.innerText = `Total: $${total.toFixed(2)}`;
        cartItems.appendChild(cartTotal); // Append the total dynamically
        cartItems.appendChild(checkoutButton); // Append the checkout button dynamically
        cartItems.appendChild(closeCartButton); // Append the close button dynamically
    }
}


// Load cart data from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart(); // Update the cart display with saved data
    }
});


//checkout button action
checkoutButton.onclick = function () {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    alert(`Your total is $${total.toFixed(2)}. Thank you for shopping!`);
    cart = []; // Clear cart
    updateCart();
};


// Close cart button action
closeCartButton.onclick = function () {
    cartItems.style.display = 'none';
};

// change quantity
function changeQuantity(index, change) {
    const item = cart[index];
    item.quantity += change;

    // Remove the item if quantity drops to zero or below
    if (item.quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart(); // Refresh the cart display
}


// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Attach event listener to search input
searchInput.addEventListener('input', searchProducts);

// Load products on page load
fetchProducts();
