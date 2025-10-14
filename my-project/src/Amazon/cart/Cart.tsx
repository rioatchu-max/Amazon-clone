import React from "react";
import { useLocation } from "react-router-dom";

type CartProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Cart() {
  const location = useLocation();
  const cart: CartProduct[] = location.state?.cart || [];
  const getTotal = () => Math.floor(cart.reduce((sum, item) => sum + item.price, 0));


  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ddd", padding: "10px 0" }}>
              <img src={item.image} alt={item.title} width={60} height={60} />
              <div style={{ marginLeft: "10px" }}>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <h3 style={{ marginTop: "10px" }}>Grand Total: ${getTotal()}</h3>
        </>
      )}
      <button  style={{marginLeft:"50%",padding:"15px", backgroundColor:"#dba21d",border:"none",borderRadius:"10px",width:"100px",cursor:"pointer"}}>order now</button>
    </div>
  );
}

