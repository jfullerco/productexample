import React from 'react'

function Product(props) {
  return(

    <div>
      {props.product.name}<br>
      {props.product.price}</br>
      {props.product.desc}
    <p></p>
    
    </div>

  )
}

export default Product