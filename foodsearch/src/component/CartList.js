import React,{useState,useEffect} from 'react'

function CartList({cart}) {
 const[count,setCount]=useState(false)
  // const increment=()=>{
  //   setCount(+count+1);
    
  // }
 
  useEffect(() => {
   setCount(false);
  }, [count])
  
  return (
    <div>{
          cart.map((x,i)=>{
           return(
          
            <div>
                <img src={x.image} style={{height:'20px',width:'20px'}}/>
                {x.title}
                <button onClick={()=>{cart[i].quantity=x.quantity-1;setCount(true)}}>-</button>
                {x.quantity}
                <button onClick={()=>{ 
                  cart[i].quantity=x.quantity+1;setCount(true)}}>+</button>
            </div>
           )
          })
        
        }</div>
  )
}

export default CartList