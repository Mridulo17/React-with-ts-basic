import { useState } from 'react'
import './App.css'
import Product from './components/Product';

export interface IProduct {
  id: number;
  title: string;
  price: number;
}
function App() {

  function handleAddToCart(id: number) {
    console.log('Clicked', id)
  }

  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      title: 'Iphone',
      price: 2000
    },
    {
      id: 2,
      title: 'Samsung',
      price: 3000
    },
    {
      id: 3,
      title: 'Apple',
      price: 4000 
    }
  ]);


  return (
    <>
      {
        products.map(product => <Product product={product} key={product.id} handleAddToCartClick={handleAddToCart} />)
      }
    </>
  )
}

export default App
