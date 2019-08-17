import React from "react";
import {Link} from "react-router-dom";
import PayPalButton from "./PayPalButton"
export default function CartTotals({val,history}){
  const{cartTotal,cartSubTotal,cartTax,clearCart}=val;
  
  return(
  <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-md-auto ml-sm-5 col-sm-8 text-capitalize text-right">
            
            <Link to="/">
            <button onClick={clearCart} type="button" className="btn btn-outline-danger px-5 text-capitalize mb-3">
            clear items
            </button>
            </Link>
            
            <h5>
              <span className="text-title">subtotal :</span><strong>$ {cartSubTotal}</strong>
            </h5>
            
            <h5>
              <span className="text-title">tax :</span><strong>$ {cartTax}</strong>
            </h5>
            
            <h5>
              <span className="text-title">total :</span><strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
          </div> 
        </div>
      </div>
  </>
  )
}