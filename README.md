# Makeup Store Application
Makeup Store is a simple web application that allows users to browse, search, and purchase makeup products from a specified brand. The app fetches product data from an API and displays the products with details such as image, price, and description. Users can add products to a shopping cart, modify quantities, and proceed to checkout.

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

## Bonus Features
Save Cart Data:
Cart items are saved to localStorage and persist between page loads.

Dynamic Quantity Adjustment:
Users can increase or decrease product quantities in the cart.

Close Cart:
A tallclose button hides the cart when not needed.

## Installation and Setup
Clone or download the repository.
git clone https://github.com/yourusername/makeup-store.git

Navigate to the project directory.
cd makeup-store

Ensure you have a local server running that provides the product data at http://localhost:3000/products. If using an API server like json-server, follow these steps:

## Install dependencies:
npm install -g json-server
Create a db.json file and seed it with your product data (e.g., name, price, description, image_link).

Start the server:
json-server --watch db.json --port 3000
Open index.html in your web browser to view the app.

## Usage
On the homepage, products from the specified brand are displayed.
Use the search bar to filter products by name.
Click "Add to Cart" to add a product to the shopping cart.
Navigate through pages of products using pagination controls.
View the cart, modify quantities, remove items, and proceed to checkout.
Upon checkout, the cart is cleared, and users are thanked for their purchase.

## Project Structure
/makeup-store |-- index.html # Main HTML file |-- /css | |-- styles.css # Styles for the application |-- /images | |-- placeholder.jpg # Placeholder image for products | |-- logo.png # Logo image for the app |-- /src | |-- script.js # JavaScript file handling product data and interactions |-- README.md # Project documentation (this file)

## API Endpoints
The following API endpoints are available:

Get all products:
GET /products

Search products:
GET /products?name={query}

Update cart (quantity):
PATCH /cart/{id}
Request Body: { "quantity": <number> }

Remove item from cart:
DELETE /cart/{id}
Example db.json File
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

## Technologies Used
HTML for the structure of the web page.
CSS for styling and layout.
JavaScript for fetching and displaying product data, handling user interactions, and managing the shopping cart.
Fetch API to interact with a backend server for product data (GET, PATCH, DELETE requests).


### Author
JOY MUTANU






