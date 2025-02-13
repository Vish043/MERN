document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const productList = document.getElementById("product-list");
    const products = document.querySelectorAll(".product-item");
    const noResultsMessage = document.getElementById("no-results");

    // Function to filter products
    function filterProducts() {
        const searchText = searchBox.value.toLowerCase();
        let matchFound = false;

        products.forEach((product) => {
            const productText = product.textContent.toLowerCase();
            
            if (productText.includes(searchText)) {
                product.style.display = "block";
                matchFound = true;
            } else {
                product.style.display = "none";
            }
        });

        // Show or hide the "No products found" message
        noResultsMessage.style.display = matchFound ? "none" : "block";
    }

    // Listen for input in the search box
    searchBox.addEventListener("keyup", filterProducts);
});