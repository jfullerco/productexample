import React from 'react'

function Product(props) {
  return(

    <div>
    {props.products.name}<br>
    {props.products.price}</br>
    {props.product.description}
    <p></p>
    
    </div>

  )
}

export default Product