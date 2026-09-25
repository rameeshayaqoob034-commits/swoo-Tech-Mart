/* =========================================
   PRODUCTS DATA
========================================= */

const products = [

    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "phone",
        price: 299999,
        image: "https://applemac.pk/public/uploads/products/org/1694672202.jpg",
        description: "Powerful Apple smartphone with premium performance."
    },

    {
        id: 2,
        name: "Samsung Galaxy S24",
        category: "phone",
        price: 219999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyCO7jdBtCc7qPO1I7kEuMGMpqyBny9NuYa0pWyPP2p0pcOyD4XGI3onE&s=10",
        description: "Premium Android smartphone with modern features."
    },

    {
        id: 3,
        name: "MacBook Pro",
        category: "laptop",
        price: 449999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqGQWQx_f66uf4-Euo4QKq-s9Q08EMR7NmXOkD7X4pTZMFaiqQFJNS6cQ&s=10",
        description: "Professional laptop for work, development and creativity."
    },

    {
        id: 4,
        name: "Dell XPS 15",
        category: "laptop",
        price: 349999,
        image: "https://images.priceoye.pk/dell-xps-15-9510-15-6-inches-11-gen-core-i7-11900h-nvidia-geforce-rtx3050-ti-4gb-gddr6-32gb-1tb-pakistan-priceoye-ke6v8.jpg",
        description: "High-performance laptop with premium design."
    },

    {
        id: 5,
        name: "iPad Pro",
        category: "tablet",
        price: 259999,
        image: "https://images.priceoye.pk/samsung-galaxy-tab-a-2020-pakistan-priceoye-wyd5f.jpg",
        description: "Powerful tablet designed for productivity and entertainment."
    },

    {
        id: 6,
        name: "Samsung Galaxy Tab",
        category: "tablet",
        price: 149999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyInSdbbVZIbXb1jtalRdSQEj94fF-0C8p6puqNoDRBJtUFtT2uhNe7gQ&s=10",
        description: "Large display tablet for work and entertainment."
    },

    {
        id: 7,
        name: "AirPods Pro",
        category: "audio",
        price: 74999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0l0Tb3rx1wwHF_7mGl7AYiYXvxT_R9CuzQ8d9YXpCT9rA_ylhPFd4ae17&s=10",
        description: "Wireless earbuds with premium sound and noise cancellation."
    },

    {
        id: 8,
        name: "Sony Headphones",
        category: "audio",
        price: 59999,
        image: "https://xcessorieshub.com/wp-content/uploads/2021/03/sony_wh_1000xm4_negro_auriculares_inalambrico_01_l-1-1-1-1.webp",
        description: "Comfortable over-ear headphones with rich sound."
    },

    {
        id: 9,
        name: "Apple Watch",
        category: "watch",
        price: 89999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsgtqvdj1wIswcj0ORooDTfJTsveifouGoUDofNVfgbdIHU6t5rQSqZo&s=10",
        description: "Smart watch with fitness and connectivity features."
    },

    {
        id: 10,
        name: "Samsung Galaxy Watch",
        category: "watch",
        price: 64999,
        image: "https://images.samsung.com/uk/galaxy-watch-ultra/2507_feature/galaxy-watch-ultra-2025-catch-the-highlights-10atm-startframe-mo.jpg?imbypass=true",
        description: "Modern smart watch with health and fitness tracking."
    },

    {
        id: 11,
        name: "Sony Digital Camera",
        category: "camera",
        price: 189999,
        image: "https://m.media-amazon.com/images/I/81boOqI0+7S._AC_UF894,1000_QL80_.jpg",
        description: "Professional digital camera for photography."
    },

    {
        id: 12,
        name: "Gaming Console",
        category: "gaming",
        price: 159999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf4AqhtZHqURM7tLHbVVmcW0YY_tu1BzROlD279_9r3M5y3iYpe_xzftn3&s=10",
        description: "Next-generation gaming console for immersive gameplay."
    }

];


/* =========================================
   HTML ELEMENTS
========================================= */

const productsContainer =
    document.getElementById("productsContainer");

const productSearch =
    document.getElementById("productSearch");

const productSearchBtn =
    document.getElementById("productSearchBtn");

const sortProducts =
    document.getElementById("sortProducts");

const categoryButtons =
    document.querySelectorAll(".category-btn");


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts(productList) {

    productsContainer.innerHTML = "";


    /* No Products */

    if (productList.length === 0) {

        productsContainer.innerHTML = `

            <div class="no-products">

                <i class="fa-solid fa-box-open"></i>

                <h3>No Products Found</h3>

                <p>
                    Try searching for another product.
                </p>

            </div>

        `;

        return;
    }


    /* Products */

    productList.forEach(product => {

       const card = document.createElement("div");

card.className = "product-card";

card.style.cursor = "pointer";

card.addEventListener("click", function(event) {

    if (
        event.target.closest(".add-cart-btn") ||
        event.target.closest(".product-wishlist")
    ) {
        return;
    }

    window.location.href =
        "product-details.html?id=" + product.id;

});


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <button
                    class="product-wishlist"
                    onclick="addToWishlist(${product.id})"
                >

                    <i class="fa-regular fa-heart"></i>

                </button>

            </div>


            <div class="product-info">

                <div class="product-category">
                    ${product.category}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <p class="product-description">
                    ${product.description}
                </p>

                <div class="product-price">
                    Rs. ${product.price.toLocaleString()}
                </div>

                <button
                    class="add-cart-btn"
                    onclick="addToCart(${product.id})"
                >

                    <i class="fa-solid fa-cart-shopping"></i>

                    Add to Cart

                </button>

            </div>

        `;


        productsContainer.appendChild(card);

    });

}


/* =========================================
   SEARCH
========================================= */

function searchProducts() {

    const searchValue =
        productSearch.value
        .toLowerCase()
        .trim();


    const filteredProducts =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(searchValue)
        );


    displayProducts(filteredProducts);

}


/* Search Button */

if (productSearchBtn) {

    productSearchBtn.addEventListener(
        "click",
        searchProducts
    );

}


/* Search Enter */

if (productSearch) {

    productSearch.addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                searchProducts();

            }

        }
    );

}


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            /* Remove active */

            categoryButtons.forEach(btn =>
                btn.classList.remove("active")
            );


            /* Add active */

            this.classList.add("active");


            const category =
                this.dataset.category;


            if (category === "all") {

                displayProducts(products);

            } else {

                const filtered =
                    products.filter(product =>
                        product.category === category
                    );

                displayProducts(filtered);

            }

        }
    );

});


/* =========================================
   SORT
========================================= */

if (sortProducts) {

    sortProducts.addEventListener(
        "change",
        function() {

            let sortedProducts =
                [...products];


            if (this.value === "low") {

                sortedProducts.sort(
                    (a, b) => a.price - b.price
                );

            }


            if (this.value === "high") {

                sortedProducts.sort(
                    (a, b) => b.price - a.price
                );

            }


            displayProducts(sortedProducts);

        }
    );

}


/* =========================================
   WISHLIST
========================================= */

function addToWishlist(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) return;


    alert(
        product.name +
        " added to wishlist!"
    );

}


/* =========================================
   INITIAL DISPLAY
========================================= */

if (productsContainer) {
    displayProducts(products);
}