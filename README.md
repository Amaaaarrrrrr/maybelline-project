# Makeup Store Application
Makeup Store is a simple web application that allows users to browse, search, and purchase makeup products from the specified brand, Maybelline. The app fetches product data from an API and displays products with details such as image, price, and description. Users can add products to a shopping cart, modify quantities, and proceed to checkout.

---

## Features
### Core Features
Product Display:
On page load, products from the specified brand (Maybelline) are displayed.

Pagination:
Products are displayed in pages of 10, with options to navigate between pages.

Search:
Users can search for specific products by name.

Add to Cart:
Users can add products to their cart with a single click.

Cart Management:
Users can view their cart, modify quantities, and remove items.

Checkout:
A checkout button allows users to complete their purchase and clear the cart.

---

## Bonus Features
Save Cart Data:
Cart items are saved to localStorage and persist between page loads.

Dynamic Quantity Adjustment:
Users can increase or decrease product quantities in the cart.

Close Cart:
A button hides the cart when not needed.

---

## Installation and Setup
1. Clone or download the repository.
git clone https://github.com/yourusername/maybelline-project.git

2. Navigate to the project directory.
cd maybelline-project

1. Run a local server to serve the HTML file:

Option 1: Use Live Server in VS Code.

Option 2: Use Python’s simple HTTP server:
python -m http.server

Option 3: Alternatively, open index.html directly in your web browser.

---

## Usage
-On the homepage, products from the specified brand are displayed.
-Use the search bar to filter products by name.
-Click "Add to Cart" to add a product to the shopping cart.
-Navigate through pages of products using pagination controls.
-View the cart, modify quantities, remove items, and proceed to checkout.
-Upon checkout, the cart is cleared, and users are thanked for their purchase.

---

## API Integration

This project fetches product data from the following API:
https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline

### API Endpoints
-Get all products:
GET /products

-Search products by name:
GET /products?name={query}

-Update cart (quantity):
PATCH /cart/{id}

-Remove item from cart:
DELETE /cart/{id}

---

## Project Structure
MAYBELLINE-2/  
│  
├── .vscode/  
│   └── settings.json        # VS Code configuration file for project-specific settings  
│  
├── images/  
│   └── logo.jpeg            # Logo image used in the project  
│  
├── index.html               # Main HTML file – structure of the web page  
├── README.md                # Project documentation – overview, setup instructions, etc.  
├── script.js                # JavaScript file – handles interactive functionality and logic  
└── style.css                # CSS file – styles and layouts for the web page


---

### Example db.json File(Optional if using json-server)

If you prefer to simulate an API locally using json-server, here’s an example db.json file:

{
  "products": [
    {
      "id": "1",
      "name": "Maybelline New York Fit Me Foundation",
      "price": 9.99,
      "description": "Liquid foundation with a natural finish.",
      "image_link": "https://via.placeholder.com/150"
    },
    {
      "id": "2",
      "name": "Maybelline Super Stay Matte Ink",
      "price": 8.49,
      "description": "Long-lasting lipstick with a bold matte finish.",
      "image_link": "https://via.placeholder.com/150"
    }
  ]
}

To start json-server:
json-server --watch db.json --port 3000

---

## Technologies Used
-HTML -for structuring the web page.
-CSS -for styling and layout.
-JavaScript -for fetching and displaying product data, handling user interactions, and managing the shopping cart.
-Fetch API -to interact with a backend server for product data (GET, PATCH, DELETE requests).

---

### Author
JOY MUTANU
Feel free to connect and contribute!






