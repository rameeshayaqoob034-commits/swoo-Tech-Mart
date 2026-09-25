// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {

    menuBtn.addEventListener("click", function () {

        navbar.classList.toggle("active");

    });

}


// ================================
// SEARCH
// ================================

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchInput) {

    searchBtn.addEventListener("click", function () {

        const searchValue =
            searchInput.value.trim();

        if (searchValue === "") {

            alert("Please enter a product name.");

            return;
        }

        window.location.href =
            `products.html?search=${encodeURIComponent(searchValue)}`;

    });

}