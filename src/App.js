import React from "react";
import "./style.css";

import Product from './comp/ProdComp'
import prodData from './comp/products'



function App() {

  const productComponents = prodData.map(item => <Product products={item}/>)

  return(
    <div>
      {productComponents}
    </div>
  )
}

export default App