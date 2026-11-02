// Array of products (Dynamic Content)
const products = [
    { name: "Chocolate Cake", price: "R250", image: "images/chocolate-cake.jpg" },
    { name: "Vanilla Cupcakes", price: "R80", image: "images/vanilla-cupcakes.jpg" },
    { name: "Croissants", price: "R35", image: "images/butter-croissant.jpg" },
    { name: "Fresh Bread", price: "R45", image: "images/fresh-bread.jpg" },
    { name: "Red Velvet Cake", price: "R280", image: "images/red-velvet-cake.jpg" }
];

const productGrid = document.getElementById('product-grid');
const searchInput = document.getElementById('productSearch');

// Function to display products
function displayProducts(productList) {
    productGrid.innerHTML = ""; // Clear current grid
    
    if (productList.length === 0) {
        productGrid.innerHTML = "<p>No products found matching your search.</p>";
        return;
    }

    productList.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        // SEO: Descriptive alt text for images
        card.innerHTML = `
            <img src="${product.image}" alt="Delicious ${product.name} baked fresh at Blossom and Rosebud" class="product-img">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        
        // Lightbox trigger
        const img = card.querySelector('img');
        img.addEventListener('click', () => openLightbox(img.src, img.alt));

        productGrid.appendChild(card);
    });
}

// Initial Load
displayProducts(products);

// Search Filter Feature
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
});
