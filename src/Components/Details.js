import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import {ButtonContainer} from "./Button";
class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {
          val=>{
          const{img,id,info,company,title,inCart,price}=val.detailProduct;
            return(
            <div className="container py-5">
                {/* Title"*/}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted my-5">
                    <h1 className="text-blue">{title}</h1>
                  </div>
                </div>
                {/* end of Title*/}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                  <img src={img} alt="product" className="img-fluid"/>
                  </div>
                 <div className="col-10 mx-auto col-md-6 text-capitalize my-3">
                   <h2 className="">model: {title}</h2>
                   <h4 className="text-title text-muted text-uppercase mt-3 mb-2">
                     made by: <span className="text-uppercase">{company}</span>
                   </h4>
                   <h4 className="text-blue">
                     <strong>price: <span>$</span>{price}</strong>
                   </h4>
                   <p className="text-capitalize mt-3 mb-0 font-wheight-bold">
                   some info about the product:
                   </p>
                   <p className="text-muted lead">
                     {info}
                   </p>
                   <div className="">
                     <Link to="/">
                       <ButtonContainer>Back To Products</ButtonContainer>
                     </Link>
                     <ButtonContainer cart onClick={()=>{val.addToCart(id); val.openModal(id); }} disabled={inCart?true:false}>{inCart?"inCart":"Add To Cart"}</ButtonContainer>
                   </div>
                </div> 
             </div>
            </div>
            );
        }
          }
      </ProductConsumer>
    );
  }
}

export default Details;
