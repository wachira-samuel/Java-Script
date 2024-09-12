document.addEventListener("DOMContentLoaded", () => {
    const productsList = document.getElementById('products-list');

    // Fetch data from JSON Server
    fetch('http://localhost:3000/product')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                // Create a new row for each product
                const row = document.createElement('tr');

                // Insert product details into the table row
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.description}</td>
                    <td>$${product.price.toFixed(2)}</td>
                    <td>${product.category}</td>
                    <td>${product.stock}</td>
                `;

                // Append the row to the table body
                productsList.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
