/* =========================================
   PRODUCT DETAILS
========================================= */


/* PRODUCT DATA */

const detailProducts = [

    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "Phone",
        price: 299999,
        image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg",
        description: "Powerful Apple smartphone with premium performance."
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "Phone",
        price: 219999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCO7jdBtCc7qPO1I7kEuMGMpqyBny9NuYa0pWyPP2p0pcOyD4XGI3onE&s=10",
        description: "Premium Android smartphone with modern features."
    },

    {
        id: 3,
        name: "MacBook Pro",
        category: "Laptop",
        price: 449999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGQWQx_f66uf4-Euo4QKq-s9Q08EMR7NmXOkD7X4pTZMFaiqQFJNS6cQ&s=10",
        description: "Professional laptop for work, development and creativity."
    },

    {
        id: 4,
        name: "Dell XPS 15",
        category: "Laptop",
        price: 349999,
        image: "https://images.priceoye.pk/dell-xps-15-9510-15-6-inches-11-gen-core-i7-11900h-nvidia-geforce-rtx3050-ti-4gb-gddr6-32gb-1tb-pakistan-priceoye-ke6v8.jpg",
        description: "High-performance laptop with premium design."
    },

    {
        id: 5,
        name: "iPad Pro",
        category: "Tablet",
        price: 259999,
        image: "https://images.priceoye.pk/samsung-galaxy-tab-a-2020-pakistan-priceoye-wyd5f.jpg",
        description: "Powerful tablet designed for productivity and entertainment."
    },

    {
        id: 6,
        name: "Samsung Galaxy Tab",
        category: "Tablet",
        price: 149999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyInSdbbVZIbXb1jtalRdSQEj94fF-0C8p6puqNoDRBJtUFtT2uhNe7gQ&s=10",
        description: "Large display tablet for work and entertainment."
    },

    {
        id: 7,
        name: "AirPods Pro",
        category: "Audio",
        price: 74999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0l0Tb3rx1wwHF_7mGl7AYiYXvxT_R9CuzQ8d9YXpCT9rA_ylhPFd4ae17&s=10",
        description: "Wireless earbuds with premium sound and noise cancellation."
    },

    {
        id: 8,
        name: "Sony Headphones",
        category: "Audio",
        price: 59999,
        image: "https://xcessorieshub.com/wp-content/uploads/2021/03/sony_wh_1000xm4_negro_auriculares_inalambrico_01_l-1-1-1-1.webp",
        description: "Comfortable over-ear headphones with rich sound."
    },

    {
        id: 9,
        name: "Apple Watch",
        category: "Watch",
        price: 89999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsgtqvdj1wIswcj0ORooDTfJTsveifouGoUDofNVfgbdIHU6t5rQSqZo&s=10",
        description: "Smart watch with fitness and connectivity features."
    },

    {
        id: 10,
        name: "Samsung Galaxy Watch",
        category: "Watch",
        price: 64999,
        image: "https://images.samsung.com/uk/galaxy-watch-ultra/2507_feature/galaxy-watch-ultra-2025-catch-the-highlights-10atm-startframe-mo.jpg?imbypass=true",
        description: "Modern smart watch with health and fitness tracking."
    },

    {
        id: 11,
        name: "Sony Digital Camera",
        category: "Camera",
        price: 189999,
        image: "https://m.media-amazon.com/images/I/81boOqI0+7S._AC_UF894,1000_QL80_.jpg",
        description: "Professional digital camera for photography."
    },

    {
        id: 12,
        name: "Gaming Console",
        category: "Gaming",
        price: 159999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4AqhtZHqURM7tLHbVVmcW0YY_tu1BzROlD279_9r3M5y3iYpe_xzftn3&s=10",
        description: "Next-generation gaming console for immersive gameplay."
    }

];


/* =========================================
   GET PRODUCT ID FROM URL
========================================= */

const urlParams = new URLSearchParams(
    window.location.search
);

const productId = Number(
    urlParams.get("id")
);


/* =========================================
   FIND PRODUCT
========================================= */

const selectedProduct =
    detailProducts.find(
        product => product.id === productId
    );


/* =========================================
   HTML ELEMENTS
========================================= */

const detailImage =
    document.getElementById("detailProductImage");

const detailName =
    document.getElementById("detailProductName");

const detailCategory =
    document.getElementById("detailProductCategory");

const detailPrice =
    document.getElementById("detailProductPrice");

const detailDescription =
    document.getElementById("detailProductDescription");

const quantityElement =
    document.getElementById("quantity");

const minusBtn =
    document.getElementById("minusBtn");

const plusBtn =
    document.getElementById("plusBtn");

const addCartBtn =
    document.getElementById("detailsAddCart");

const wishlistBtn =
    document.getElementById("detailsWishlist");


/* =========================================
   SHOW PRODUCT
========================================= */

if (selectedProduct) {

    detailImage.src =
        selectedProduct.image;

    detailImage.alt =
        selectedProduct.name;

    detailName.textContent =
        selectedProduct.name;

    detailCategory.textContent =
        selectedProduct.category;

    detailPrice.textContent =
        "Rs. " +
        selectedProduct.price.toLocaleString();

    detailDescription.textContent =
        selectedProduct.description;

}


/* =========================================
   QUANTITY
========================================= */

let quantity = 1;


plusBtn.addEventListener(
    "click",
    function() {

        quantity++;

        quantityElement.textContent =
            quantity;

    }
);


minusBtn.addEventListener(
    "click",
    function() {

        if (quantity > 1) {

            quantity--;

            quantityElement.textContent =
                quantity;

        }

    }
);


/* =========================================
   ADD TO CART
========================================= */

addCartBtn.addEventListener(
    "click",
    function() {

        if (!selectedProduct) {
            return;
        }


        /*
           Existing cart function
        */

        if (typeof addToCart === "function") {

            for (
                let i = 0;
                i < quantity;
                i++
            ) {

                addToCart(
                    selectedProduct.id
                );

            }

        }


        alert(
            selectedProduct.name +
            " added to cart!"
        );

    }
);


/* =========================================
   WISHLIST
========================================= */

wishlistBtn.addEventListener(
    "click",
    function() {

        wishlistBtn.classList.toggle(
            "wishlist-active"
        );


        if (
            wishlistBtn.classList.contains(
                "wishlist-active"
            )
        ) {

            wishlistBtn.innerHTML =
                '<i class="fa-solid fa-heart"></i>';

            wishlistBtn.style.color =
                "#ff3030";

            alert(
                selectedProduct.name +
                " added to wishlist!"
            );

        } else {

            wishlistBtn.innerHTML =
                '<i class="fa-regular fa-heart"></i>';

            wishlistBtn.style.color =
                "";

        }

    }
);