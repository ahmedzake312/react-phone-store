import React from "react";
import {storeProducts,detailProduct} from "./data";

const ProductContext=React.createContext();

class ProductProvider extends React.Component{
  state={
    products:[],
    detailProduct:detailProduct,
    cart:[],
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0
  }
componentDidMount(){
  this.setProducts();
}

getItem=(id)=>{
  const product=this.state.products.find(item=>item.id==id);
  return product;
}
handleDetail=(id)=>{
  const product=this.getItem(id);
  this.setState(()=>{
    return{detailProduct:product}
  }
  );
}
setProducts=()=>{
  let products=[];
  storeProducts.forEach((item)=>{
    let singleItem={...item};
    products=[...products,singleItem];
  })
  this.setState(()=>{
    return {products}
  })
}
addToCart=(id)=>{
  let tempProducts=[...this.state.products];
  const index=tempProducts.indexOf(this.getItem(id));
  const product=tempProducts[index];
  product.inCart=true;
  product.count=1;
  const price=product.price;
  product.total=price;
  this.setState({
    products:tempProducts,
    cart:[...this.state.cart,product]
  },()=>{
    this.addTotals();
  });
}
openModal=(id)=>{
 const product=this.getItem(id);
  this.setState({
    modalOpen:true,
    modalProduct: product
  })
}
closeModal=()=>{
  this.setState({
    modalOpen:false
  });
}
increment=(id)=>{
  let tempCart=[...this.state.cart];
  const selectedProduct=tempCart.find(item=>item.id==id);
  const index=tempCart.indexOf(selectedProduct);
  const product=tempCart[index];
  
  product.count=product.count +1;
  product.total=product.count * product.price;
  
  this.setState({
    cart:[...tempCart]
  },()=>{
    this.addTotals();
  })
}

decrement=(id)=>{
  let tempCart=[...this.state.cart];
  const selectedProduct=tempCart.find(item=>item.id==id);
  const index=tempCart.indexOf(selectedProduct);
  const product=tempCart[index];
  product.count=product.count -1;
  if(product.count===0){
    this.removeItem(id);
  }else{
    product.total=product.count*product.price;
    
    this.setState({
    cart:[...tempCart]
  },()=>{
    this.addTotals();
  })
  }
  
}
removeItem=(id)=>{
  let tempProducts=[...this.state.products];
  let tempCart=[...this.state.cart];
  
  tempCart=tempCart.filter(item=>item.id!==id);
  
  const index =tempProducts.indexOf(this.getItem(id));
  const removedProduct=tempProducts[index];
  
  removedProduct.inCart=false;
  removedProduct.total=0;
  removedProduct.cont=0;
  
  this.setState({
    cart:[...tempCart],
    products:[...tempProducts]
  },
()=>{
    this.addTotals();
  })
  
}

clearCart=()=>{
  this.setState({
    cart:[]
  },()=>{
    this.setProducts();
    this.addTotals();
  });
}

addTotals=()=>{
  let subTotal=0;
  this.state.cart.map(item=>(subTotal+=item.total));
  const tempTax=subTotal*0.1;
  const tax=parseFloat(tempTax.toFixed(2));
  const total=subTotal+tax;
  this.setState({
    cartSubTotal:subTotal,
    cartTax:tax,
    cartTotal:total
  });
}

render(){
  return(
    <ProductContext.Provider 
        value={{...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        openModal:this.openModal,
        closeModal:this.closeModal,
        clearCart:this.clearCart,
        removeItem:this.removeItem,
        increment:this.increment,
        decrement:this.decrement
        }}>
      {this.props.children}
    </ProductContext.Provider>
  )
  }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}