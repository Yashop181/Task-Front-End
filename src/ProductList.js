import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]); // to hold products array
  const [searchTerm, setSearchTerm] = useState(''); // for search term

  useEffect(() => {
    // load products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleSearch = (e) => {
    //update search term state on input change
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Product List</h2>
      <input type="text" placeholder="Search By Product Name" value={searchTerm} onChange={handleSearch} className="product-list-search"/>
      {filteredProducts.length === 0 ? (
        <h1 className="product-list-empty">No Products found. Add Products.</h1>
      ) : (
        <ul className="product-list-items">
          {filteredProducts.map(product => (
            <li key={product.id} className="product-list-item">
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
