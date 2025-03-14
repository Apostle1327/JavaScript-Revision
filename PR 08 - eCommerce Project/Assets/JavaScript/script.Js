class Product {
  constructor(id, name, price, imageUrl) {
    if (new.target === Product) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  displayProduct() {
    throw new Error("Abstract method must be implemented");
  }
}

class PhysicalProduct extends Product {
  constructor(id, name, price, weight, imageUrl) {
    super(id, name, price, imageUrl);
    this.weight = weight;
  }

  displayProduct() {
    return `
        <div class="product">
          <img src="${this.imageUrl}" alt="${this.name}" height="200" width="200">
          <h3>${this.name}</h3>
          <p>Weight: ${this.weight} Kg</p>
          <button onclick="shop.addToCart(${this.id})">Add to Cart</button>
        </div>
      `;
  }
}

class DigitalProduct extends Product {
  constructor(id, name, price, fileSize, imageUrl) {
    super(id, name, price, imageUrl);
    this.fileSize = fileSize;
  }

  displayProduct() {
    return `
        <div class="product">
          <img src="${this.imageUrl}" alt="${this.name}" height="200" width="200">
          <h3>${this.name}</h3>
          <p>File Size: ${this.fileSize} MB</p>
          <button onclick="shop.addToCart(${this.id})">Add to Cart</button>
        </div>
      `;
  }
}

class CartItem {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  incrementQuantity() {
    this.quantity++;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }

  displayCartItem() {
    return `
        <li>
          <img src="${this.product.imageUrl}" alt="${
      this.product.name
    }" height="50" width="50">
          ${this.product.name} - $${this.product.price} x ${
      this.quantity
    } = $${this.getTotalPrice()}
        </li>
      `;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }

  addProduct(product) {
    const existingItem = this.items.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.incrementQuantity();
    } else {
      this.items.push(new CartItem(product));
    }
    this.displayCart();
  }

  displayCart() {
    const cartElement = document.getElementById("cart-item");
    cartElement.innerHTML = this.items
      .map((item) => item.displayCartItem())
      .join("");
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  checkout() {
    if (this.items.length === 0) {
      alert("Cart is empty");
      return;
    }
    alert(`Total: $${this.getTotal()}`);
    this.items = [];
    this.displayCart();
  }
}

class Shop {
  constructor(products) {
    this.products = products;
    this.cart = new Cart();
  }

  displayProducts() {
    const productList = document.getElementById("products");
    productList.innerHTML = this.products
      .map((product) => product.displayProduct())
      .join("");
  }

  addToCart(productId) {
    const product = this.products.find((p) => p.id === productId);
    this.cart.addProduct(product);
  }

  checkout() {
    this.cart.checkout();
  }

  init() {
    this.displayProducts();
    document.getElementById("checkout-button").addEventListener("click", () => {
      this.checkout();
    });
  }
}

const products = [
  new PhysicalProduct(
    1,
    "Laptop",
    1500,
    2.5,
    "https://m.media-amazon.com/images/I/718KIfPQOhL._AC_SL1500_.jpg"
  ),
  new PhysicalProduct(
    2,
    "Phone",
    800,
    0.3,
    "https://www.digitaltrends.com/wp-content/uploads/2023/07/nothing-phone-2-with-phone-1-lights.jpg?fit=3000%2C2000&p=1"
  ),
  new DigitalProduct(
    3,
    "E-book",
    15,
    5,
    "https://preview.redd.it/tj1v8ys432k81.jpg?width=640&crop=smart&auto=webp&s=5a1863d5b02f661b813b0b71c4f68509c6c696d4"
  ),
];

const shop = new Shop(products);
shop.init();
