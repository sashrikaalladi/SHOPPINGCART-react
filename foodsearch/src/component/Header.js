import React from 'react'

function Header(props) {
    const displaycart=()=>{
        props.setShowCart(!props.ShowCart)
    }
    const displayitems=()=>{
     props.setShowCart()
     console.log(props.setShowCart);
    }
  return (
    <>
    <div onClick={()=>displayitems()}>showitems</div>
    <div onClick={()=>displaycart()}>Cart
        <sup>{props.count}</sup>
    </div>
    </>
  )
}

export default Header