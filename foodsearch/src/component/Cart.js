import './Cart.css'
import axios from 'axios';
import React,{useEffect, useState} from 'react';
function Cart({addTocart}) {
 const[datas,setDatas]=useState('');
 const [searchTerm, setSearchTerm] = useState('');  
 const [searchResults, setSearchResults] = useState([]);
 const searchfunction=()=>{
    if(searchTerm===''){
      setSearchResults(datas)
     }else{
      const finalresult=datas.filter((event)=>(
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
   ))

    setSearchResults(finalresult)
    console.log(datas);
     }
     }
 const submitHandler=e=>{
    e.preventDefault()
 }

  const getdata=async()=>{
   
   await axios.get(`https://fakestoreapi.com/products`)
    .then(res=>{
      console.log(res.data);
      setDatas(res.data);
      setSearchResults(res.data);
    })
  }
  useEffect(() => {
   getdata();
   searchfunction();
  }, [])
  
  return (
    <>
    <div className='items'>
    <form onSubmit={submitHandler}>
        <input type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
        <input type='submit' value="search" onClick={searchfunction}/>
    </form>
     {searchResults && searchResults.map((x)=>{
     return( 
     <div className='one'>
      <div>{x.title}</div>
     <img src={x.image} style={{height:'80px',width:'80px'}}></img>
     <button onClick={()=>addTocart(x)}>Add to cart</button>
     </div>
     )
      })}
      
    </div>
    </>
  );
}

export default Cart;
