import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function ProductPage() {
  return (
    <div style={{
        display: "flex"
    }}>
      <nav style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
        <Link to="/product/electronics">Electronics</Link>
        <Link to="/product/clothing">Clothing</Link>
        <Link to="/product/furniture">Furniture</Link>
      </nav>

        <Outlet />      
    </div>
  )
}

export default ProductPage