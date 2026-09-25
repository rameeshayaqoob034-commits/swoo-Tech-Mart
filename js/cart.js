/* =========================================
   CART SYSTEM
========================================= */


/* Get Cart */

function getCart() {

    const cart = localStorage.getItem("cart");

    return cart ? JSON.parse(cart) : [];

}


/* Save Cart */

function saveCart(cart) {

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

}


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

    let cart = getCart();

    const existingProduct = cart.find(
        item => item.productId === productId
    );


    if (existingProduct) {

        existingProduct.quantity += 1;

    } else {

        cart.push({
            productId: productId,
            quantity: 1
        });

    }


    saveCart(cart);

    alert("Product added to cart successfully!");

}


/* =========================================
   CART COUNT
========================================= */

function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) {
        return;
    }


    const cart = getCart();

    let totalQuantity = 0;


    cart.forEach(item => {

        totalQuantity += item.quantity;

    });


    cartCount.textContent = totalQuantity;

}


/* =========================================
   REMOVE ITEM
========================================= */

function removeFromCart(productId) {

    let cart = getCart();

    cart = cart.filter(
        item => item.productId !== productId
    );

    saveCart(cart);

    displayCart();

}


/* =========================================
   CHANGE QUANTITY
========================================= */

function changeQuantity(productId, change) {

    let cart = getCart();

    const item = cart.find(
        item => item.productId === productId
    );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.productId !== productId
        );

    }


    saveCart(cart);

    displayCart();

}


/* =========================================
   CLEAR CART
========================================= */

function clearCart() {

    localStorage.removeItem("cart");

    updateCartCount();

    displayCart();

}


/* =========================================
   DISPLAY CART
========================================= */

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");


    if (!cartItems) {
        return;
    }


    const cart = getCart();


    /* Empty Cart */

    if (cart.length === 0) {

        cartItems.innerHTML = "";

        emptyCart.style.display = "block";

        updateSummary(0);

        return;

    }


    emptyCart.style.display = "none";


    let subtotal = 0;


    cartItems.innerHTML = "";


    cart.forEach(item => {

        const product = products.find(
            product => product.id === item.productId
        );


        if (!product) {
            return;
        }


        const itemTotal =
            product.price * item.quantity;


        subtotal += itemTotal;


        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="cart-item-info">

                <div class="cart-item-category">
                    ${product.category}
                </div>

                <h3>${product.name}</h3>

                <div class="cart-item-price">
                    Rs. ${product.price.toLocaleString()}
                </div>

            </div>


            <div class="quantity-control">

                <button
                    onclick="changeQuantity(${product.id}, -1)"
                >
                    <i class="fa-solid fa-minus"></i>
                </button>


                <span>
                    ${item.quantity}
                </span>


                <button
                    onclick="changeQuantity(${product.id}, 1)"
                >
                    <i class="fa-solid fa-plus"></i>
                </button>

            </div>


            <div class="cart-item-total">

                Rs. ${itemTotal.toLocaleString()}

            </div>


            <button
                class="remove-item"
                onclick="removeFromCart(${product.id})"
                title="Remove Product"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    updateSummary(subtotal);

}


/* =========================================
   UPDATE SUMMARY
========================================= */

function updateSummary(subtotal) {

    const subtotalElement =
        document.getElementById("cartSubtotal");

    const shippingElement =
        document.getElementById("cartShipping");

    const taxElement =
        document.getElementById("cartTax");

    const totalElement =
        document.getElementById("cartTotal");


    /* Free shipping over Rs. 50 */

    let shipping = 0;

    if (subtotal > 0 && subtotal < 50) {

        shipping = 5;

    }


    /* 5% tax */

    const tax = subtotal * 0.05;

    const total =
        subtotal + shipping + tax;


    if (subtotalElement) {

        subtotalElement.textContent =
            `Rs. ${subtotal.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;

    }


    if (shippingElement) {

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : `Rs. ${shipping.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`;

    }


    if (taxElement) {

        taxElement.textContent =
            `Rs. ${tax.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;

    }


    if (totalElement) {

        totalElement.textContent =
            `Rs. ${total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}`;

    }

}


/* =========================================
   CLEAR CART BUTTON
========================================= */

const clearCartBtn =
    document.getElementById("clearCartBtn");


if (clearCartBtn) {

    clearCartBtn.addEventListener(
        "click",
        function () {

            const cart = getCart();


            if (cart.length === 0) {

                alert("Your cart is already empty.");

                return;

            }


            const confirmClear =
                confirm(
                    "Are you sure you want to clear your cart?"
                );


            if (confirmClear) {

                clearCart();

            }

        }
    );

}


/* =========================================
   CHECKOUT BUTTON
========================================= */

const checkoutBtn =
    document.getElementById("checkoutBtn");


if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        function () {

            const cart = getCart();


            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add products first."
                );

                return;

            }

        }
    );

}


/* =========================================
   PAGE LOAD
========================================= */

updateCartCount();

displayCart();