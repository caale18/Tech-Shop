import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Laptop', price: '$1000', image: '/laptop.png' },
  { id: 2, name: 'Monitor', price: '$300', image: '/monitor.png' },
  { id: 3, name: 'Teclado', price: '$50', image: '/keyboard.png' },
];

function HomePage() {
  return (
    <div className="homepage">
      <h2>Productos Destacados</h2>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;