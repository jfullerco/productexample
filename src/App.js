import React from 'react'
import './style.css'

import Product from './comp/Product'
import products from './productsdata'



function App() {

  console.log(products)

  return(
    <div>
      {productComponents}
    </div>
  )
}

export default App