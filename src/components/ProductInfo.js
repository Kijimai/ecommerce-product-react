import React from "react"

const ProductInfo = () => {
  const originalPrice = 250

  return (
    <div>
      <h2>Sneaker Company</h2>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <p>${originalPrice / 2}</p>
      <p>${originalPrice}</p>
    </div>
  )
}

export default ProductInfo
