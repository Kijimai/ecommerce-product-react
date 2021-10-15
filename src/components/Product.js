import React from "react"
import ImageCarousel from "./ImageCarousel"
import ProductInfo from "./ProductInfo"

const Product = () => {
  return (
    <div className="product-container">
      <ImageCarousel />
      <ProductInfo />
    </div>
  )
}

export default Product
