import React,{ useState } from 'react';
import './App.css';
import Cart from './component/Cart';
import CartList from './component/CartList';
import Header from './component/Header';
function App() {
  const[showCart,setShowCart]=useState(false)
  const[cart,setCart]=useState([])
  
  console.log(cart)
  const addTocart=(data)=>{
    setCart([...cart,{...data,quantity:1}])
 
  }
  return (
    <>
    <div className="App">
      <Header count={cart.length} setShowCart={setShowCart} showCart={showCart}/>
      {showCart?
      <CartList cart={cart}></CartList>:<Cart addTocart={addTocart}/>}
    </div>
    </>
  );
}

export default App;
