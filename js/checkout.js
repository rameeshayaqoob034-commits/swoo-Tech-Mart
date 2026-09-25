/* =================================
   CHECKOUT SYSTEM
================================= */


// Get cart from localStorage
function getCheckoutCart() {

    const cart = localStorage.getItem("cart");

    return cart ? JSON.parse(cart) : [];
}



// Display products in checkout
function displayCheckoutItems() {

    const checkoutItems =
        document.getElementById("checkoutItems");

    if (!checkoutItems) return;


    const cart = getCheckoutCart();


    // Cart empty
    if (cart.length === 0) {

        checkoutItems.innerHTML = `
            <div class="empty-checkout">

                <i class="fa-solid fa-cart-shopping"></i>

                <p>Your cart is empty.</p>

                <a href="products.html">
                    Continue Shopping
                </a>

            </div>
        `;

        updateCheckoutSummary(0);

        return;
    }


    let subtotal = 0;

    checkoutItems.innerHTML = "";


    cart.forEach(item => {

        const product = products.find(
            product => product.id === item.productId
        );


        if (!product) return;


        const itemTotal =
            product.price * item.quantity;


        subtotal += itemTotal;


        const itemHTML = document.createElement("div");

        itemHTML.className = "checkout-item";


        itemHTML.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div class="checkout-item-info">

                <h4>${product.name}</h4>

                <p>
                    Quantity: ${item.quantity}
                </p>

            </div>

            <div class="checkout-item-price">

                $${itemTotal.toFixed(2)}

            </div>

        `;


        checkoutItems.appendChild(itemHTML);

    });


    updateCheckoutSummary(subtotal);
}



// Update checkout totals
function updateCheckoutSummary(subtotal) {

    let shipping = 0;


    // Same shipping rule as cart
    if (subtotal > 0 && subtotal < 50) {

        shipping = 5;

    }


    // 5% tax
    const tax = subtotal * 0.05;


    const total =
        subtotal + shipping + tax;


    const subtotalElement =
        document.getElementById("checkoutSubtotal");

    const shippingElement =
        document.getElementById("checkoutShipping");

    const taxElement =
        document.getElementById("checkoutTax");

    const totalElement =
        document.getElementById("checkoutTotal");


    if (subtotalElement) {

        subtotalElement.textContent =
            `$${subtotal.toFixed(2)}`;

    }


    if (shippingElement) {

        shippingElement.textContent =
            shipping === 0
                ? "FREE"
                : `$${shipping.toFixed(2)}`;

    }


    if (taxElement) {

        taxElement.textContent =
            `$${tax.toFixed(2)}`;

    }


    if (totalElement) {

        totalElement.textContent =
            `$${total.toFixed(2)}`;

    }

}



// Place Order
const checkoutForm =
    document.getElementById("checkoutForm");


if (checkoutForm) {

    checkoutForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const cart = getCheckoutCart();


            // Prevent empty order
            if (cart.length === 0) {

                alert(
                    "Your cart is empty. Please add products first."
                );

                window.location.href = "products.html";

                return;
            }


            // Get customer information
            const fullName =
                document.getElementById("fullName").value;

            const email =
                document.getElementById("email").value;

            const phone =
                document.getElementById("phone").value;

            const city =
                document.getElementById("city").value;

            const address =
                document.getElementById("address").value;


            const paymentMethod =
                document.querySelector(
                    'input[name="payment"]:checked'
                ).value;


            // Create order
            const order = {

                orderId:
                    "ORD-" + Date.now(),

                customer: {

                    fullName: fullName,
                    email: email,
                    phone: phone,
                    city: city,
                    address: address

                },

                paymentMethod:
                    paymentMethod,

                products: cart,

                orderDate:
                    new Date().toLocaleString()

            };


            // Save order
            localStorage.setItem(
                "lastOrder",
                JSON.stringify(order)
            );


            // Clear cart
            localStorage.removeItem("cart");


            // Update cart count
            const cartCount =
                document.getElementById("cartCount");

            if (cartCount) {

                cartCount.textContent = "0";

            }


            // Success message
            alert(
                "Order placed successfully! Thank you for shopping with SWOO TECH MART."
            );


            // Go Home
            window.location.href = "index.html";

        }
    );

}


// Initial load
displayCheckoutItems();