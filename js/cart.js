
const paradioDivs = document.querySelectorAll('.paradio');
const radioButtons = document.querySelectorAll('.paradio input[type="radio"]');
const smallPhotos = document.querySelectorAll(".product-photos .smallphotos img");
const largephoto = document.querySelector(".product-photos .largephoto img");

let selectedColorFromIMG = ""; 

radioButtons.forEach((radio, index) => {
  radio.addEventListener('click', () => {
    // Reset background color of all paradio divs
    paradioDivs.forEach((div) => {
      div.style.backgroundColor = '';
    });
    // Set the background color of the clicked paradio div
    paradioDivs[index].style.backgroundColor = '#d8d8d8'; 
  });
});

smallPhotos.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Change the large image
    largephoto.src = element.src;

    // Set the selected color from the IMGs object based on the clicked element
    selectedColorFromIMG = Object.keys(IMGs)[index];
    // Highlight the corresponding paradio div
    paradioDivs.forEach((div) => {
      div.style.backgroundColor = '';
    });
    paradioDivs[index].style.backgroundColor = '#d8d8d8'; // Change to your desired color
    
    animationIMG();
  });
});

let inpLable = document.querySelectorAll(".product-color .paradio label");
let IMGs = {
  white: `./img/manwhitetshirt.svg`,
  black: `./img/manblacktshirt.svg`,
  whiteBrawn: `./img/manOtshirt.svg`,
  blue: `./img/manbluetshirt.svg`
};

inpLable.forEach((element) => {
  element.addEventListener("click", () => {
    // Get the color from the label's 'for' attribute
    const color = element.getAttribute('for');

    // Change the large image based on the selected color
    largephoto.src = IMGs[color];

    // Set the selected color from the IMGs object
    selectedColorFromIMG = color;

    animationIMG();
  });
});

function animationIMG() {
  if (!largephoto.classList.contains('animate__bounceInDown')) {
    largephoto.classList.add('animate__bounceInDown');
    largephoto.classList.remove('animate__bounceInUp');
  } else {
    largephoto.classList.remove('animate__bounceInDown');
    largephoto.classList.add('animate__bounceInUp');
  }
}




let size = "L";
const sizeSelect = document.getElementById('sizeSelect');


// Function to handle size change
function handleSizeChange() {
  size = sizeSelect.value;
  console.log("Selected Size :", size);
}
// Add change event listener to the size select
if (sizeSelect) {
  sizeSelect.addEventListener('change', handleSizeChange);
}












// store & add new product 

const product_detailes = document.querySelector(".product_detailes"),
  addToCartButton = document.querySelector("#addtocart");

let productList = JSON.parse(localStorage.getItem("Product")) || [];


// Function add  data product
function addDataProduct() {
  const imgsrc = product_detailes.querySelector(".largephoto img").src;
  const product_name = product_detailes.querySelector(".product_name").innerText;
  const  product_id = product_detailes.querySelector(".product_id .id").innerText;
  const  product_price = +product_detailes.querySelector("#product_price").innerText;

  let count = +product_detailes.querySelector(".product-Quantity .count").innerText;


  // Create a productObject with the desired properties
  const productObject = {
    id: product_id,
    imgSrc: imgsrc,
    name: product_name,
    price: product_price,
    count: count,
    size: size,
    color: selectedColorFromIMG
  };

  // Find the index of the product in the productList array
  const productIndex = productList.findIndex((item) => {
    return (
      item.id === productObject.id &&
      item.color === productObject.color &&
      item.size === productObject.size
    );
  });

  if (productIndex >= 0) {
    // Product already exists, update the count
    productList[productIndex].count += productObject.count;
  } else {
    // Product doesn't exist, add a new one
    productList.push(productObject);
  }
  localStorage.setItem("Product", JSON.stringify(productList));
  show()
  
}


// Function show all product store in loacl storage in list product Cart
const cartList = document.querySelector(".cart .cart-list .cartContent"),
  countCircleCart = document.querySelector(".icons button .count_Circle_Cart");
let totalCost = document.querySelector(".cart-footer #totalCost");

function show() {
  let sum = 0
  cartList.innerHTML = ""

  productList.forEach((product, ind) => {
    sum += (product.price * product.count)
    let contentProduct =
      `
      <div class="flex-row">
      <div class="flex-cell-2fr">
        <div class="cart-product d-flex gap-5">
          <div class="cart-product_img"><img src="${product.imgSrc}" alt=""></div>
          <div class="cart-product_content">
            <h3 id="ProductName">${product.name}</h3>
            <p id="ProductID">#${product.id}</p>
          </div>
        </div>
      </div>
      <div class="flex-cell order-2 order-lg-1 cart-item-Color">${product.color}</div>
      <div class="flex-cell order-3 order-lg-2 cart-item-Size">${product.size}</div>
      <div class="flex-cell order-4 order-lg-3">
        <div class="itemsAmmount">
          <button type="button" class="btn btn+cart decrease-btn" onclick="decreaseCount(${ind})">-</button>
          <span class="count">${product.count}</span>
          <button type="button" class="btn btn-cart increase-btn"onclick="increaseCount(${ind})">+</button>
        </div>
      </div>
      <div class="flex-cell order-5 order-lg-4 cart-item-price">
        $<span id="price">${product.price}</span>
      </div>
      <div class="flex-cell cart-item-cancel order-0 order-lg-last" data-id = ${ind} 
      onclick = "deleteProduct(${ind})">
        <i class="fa-sharp fa-solid fa-xmark"></i>
      </div>
  </div>

    `
    cartList.innerHTML += contentProduct;

  });
  totalCost.innerText = sum.toFixed(2);
  countCircleCart.innerText = productList.length;
  //  to show and hide the countCircleCart
  if (countCircleCart.textContent == 0) {
    countCircleCart.classList.add("d-none")
  } else {
    countCircleCart.classList.remove("d-none")
  }
}

show()

// Function delete on product list in cart
function deleteProduct(index) {
  productList.splice(index, 1)
  localStorage.setItem("Product", JSON.stringify(productList));
  show()

}


// event click add product
if (addToCartButton) {
  addToCartButton.onclick = _ => {
  addDataProduct()

}
}




function increaseCount(index) {
  productList[index].count++;
  localStorage.setItem("Product", JSON.stringify(productList));
  show();
}

function decreaseCount(index) {
  if (productList[index].count > 1) {
    productList[index].count--;
    localStorage.setItem("Product", JSON.stringify(productList));
    show();
  }
}

