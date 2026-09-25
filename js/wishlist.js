/* =================================
   WISHLIST SYSTEM
================================= */


/* =================================
   GET WISHLIST
================================= */

function getWishlist() {

    const wishlist =
        localStorage.getItem("wishlist");

    return wishlist
        ? JSON.parse(wishlist)
        : [];

}


/* =================================
   SAVE WISHLIST
================================= */

function saveWishlist(wishlist) {

    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );

}


/* =================================
   UPDATE WISHLIST COUNT
================================= */

function updateWishlistCount() {

    const wishlistCount =
        document.getElementById("wishlistCount");

    if (!wishlistCount) return;

    const wishlist =
        getWishlist();

    wishlistCount.textContent =
        wishlist.length;

}


/* =================================
   ADD TO WISHLIST
================================= */

function addToWishlist(productId) {

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;


    let wishlist =
        getWishlist();


    if (!wishlist.includes(productId)) {

        wishlist.push(productId);

        saveWishlist(wishlist);

        updateWishlistCount();

        alert(
            product.name +
            " added to wishlist!"
        );

    }
    else {

        alert(
            product.name +
            " is already in your wishlist."
        );

    }

}


/* =================================
   REMOVE FROM WISHLIST
================================= */

function removeFromWishlist(productId) {

    let wishlist =
        getWishlist();


    wishlist =
        wishlist.filter(
            id => id !== productId
        );


    saveWishlist(wishlist);


    updateWishlistCount();


    displayWishlist();

}


/* =================================
   DISPLAY WISHLIST
================================= */

function displayWishlist() {

    const container =
        document.getElementById(
            "wishlistContainer"
        );


    const emptyWishlist =
        document.getElementById(
            "emptyWishlist"
        );


    if (!container) return;


    const wishlist =
        getWishlist();


    /* EMPTY WISHLIST */

    if (wishlist.length === 0) {

        container.innerHTML = "";


        if (emptyWishlist) {

            emptyWishlist.style.display =
                "block";

        }


        updateWishlistCount();

        return;

    }


    /* HIDE EMPTY MESSAGE */

    if (emptyWishlist) {

        emptyWishlist.style.display =
            "none";

    }


    container.innerHTML = "";


    /* DISPLAY PRODUCTS */

    wishlist.forEach(productId => {

        const product =
            products.find(
                product => product.id === productId
            );


        if (!product) return;


        const card =
            document.createElement("div");


        card.className =
            "wishlist-card";


        card.innerHTML = `

            <div class="wishlist-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >


                <button
                    class="remove-wishlist"
                    onclick="removeFromWishlist(${product.id})"
                    title="Remove from Wishlist"
                >

                    <i class="fa-solid fa-heart"></i>

                </button>

            </div>


            <div class="wishlist-info">

                <div class="wishlist-category">
                    ${product.category}
                </div>


                <h3>
                    ${product.name}
                </h3>


                <div class="wishlist-price">
                    Rs. ${product.price.toLocaleString()}
                </div>


                <div class="wishlist-buttons">

                    <button
                        class="add-wishlist-cart"
                        onclick="addWishlistToCart(${product.id})"
                    >

                        <i class="fa-solid fa-cart-plus"></i>

                        Add to Cart

                    </button>


                    <button
                        class="view-wishlist-product"
                        onclick="viewWishlistProduct(${product.id})"
                    >

                        View

                    </button>

                </div>

            </div>

        `;


        container.appendChild(card);

    });


    updateWishlistCount();

}


/* =================================
   ADD WISHLIST PRODUCT TO CART
================================= */

function addWishlistToCart(productId) {

    let cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];


    const existingProduct =
        cart.find(
            item => item.productId === productId
        );


    if (existingProduct) {

        existingProduct.quantity += 1;

    }
    else {

        cart.push({

            productId: productId,

            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    updateCartCount();


    alert(
        "Product added to cart!"
    );

}


/* =================================
   VIEW PRODUCT DETAILS
================================= */

function viewWishlistProduct(productId) {

    window.location.href =
        "product-details.html?id=" + productId;

}


/* =================================
   INITIAL LOAD
================================= */

displayWishlist();

updateWishlistCount();