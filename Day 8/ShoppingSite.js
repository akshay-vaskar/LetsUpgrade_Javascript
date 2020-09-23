let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 120,
    image: "images/product1.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 150,
    image: "images/product2.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 90,
    image: "images/product3.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Blue Male Blazer",
    size: "M",
    color: "Blue",
    price: 300,
    image: "images/product4.jpg",
    description: "Beautiful Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 130,
    image: "images/product5.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 150,
    image: "images/product6.jpg",
    description: "Good looking Traditional Dress",
  },

  {
      id: 7,
      name: "Wedding Lehenga",
      size: "L",
      color: "Maroon",
      price: 500,
      image: "images/product7.jpg",
      description: "Wedding Special Off Shoulder Lehenga Chunari",
    },

    {
      id: 8,
      name: "Golden Bordered Black Saari",
      size: "XL",
      color: "Black",
      price: 350,
      image: "images/product8.jpg",
      description: "Golden Bordered Black Saari with Stripped Blouse",
    },

    {
      id: 9,
      name: "Floral Top and Pants",
      size: "S",
      color: "Peach and White",
      price: 80,
      image: "images/product9.jpg",
      description: "Kids Wear Peach and White Colored Floral Top with Black Pants",
    },

    {
      id: 10,
      name: "Cap Jacket",
      size: "S",
      color: "Grey",
      price: 60,
      image: "images/product10.jpg",
      description: "Grey Cap Jacket Kids Wear",
    },

    {
      id: 11,
      name: "3 Piece Suit",
      size: "M",
      color: "Black and White",
      price: 250,
      image: "images/product11.jpg",
      description: "Black Blazer and Pants with White Shirt",
    },

    {
      id: 12,
      name: "Dark Purple Shirt",
      size: "XL",
      color: "Dark Purple",
      price: 100,
      image: "images/product12.jpg",
      description: "Dark Purple Shirt Pure Cotton",
    },
];

cart = [];

function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}


let flag = 0;
function addToCart(id) {
  flag = 0;
  let pro = getProductByID(products, id);

  cart.forEach(function(ele){
    if(ele.id == pro.id){
      flag=1;
    }
  });

  if(flag==0){
  cart.push(pro);
  displayProducts(cart, "cart");
  CountCartItems();
  }
  else
  {
    alert("This Product is already in cart");
  }
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
  CountCartItems();
}

function filterByPrice(){
    let minPrice = document.getElementById('min-price').value;
    let maxPrice = document.getElementById('max-price').value;
    let filteredProducts = products.filter(function(prod){
      return prod.price>=minPrice && prod.price<=maxPrice;

    });

    displayProducts(filteredProducts);
}

function CountCartItems(){
  document.getElementById("CartCount").value = cart.length;
  //console.log(c);
}

CountCartItems();
