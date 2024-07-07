import React, { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    return storedProducts;
  });

  const handleProductName = (e) => {
    setProductName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingProduct = products.find(product => product.name === productName);
    if (existingProduct) {
      alert('Product already exists');
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: parseFloat(price)
    };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    setProductName('');
    setPrice('');
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="add-product-container">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label className="add-product-label">Product Name:</label>
        <input type="text" value={productName} onChange={handleProductName} className="add-product-input" required/>
        <label className="add-product-label">Product Price:</label>
        <input type="number" value={price} onChange={handlePrice} className="add-product-input" required/>
        <button type="submit" className="add-product-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
