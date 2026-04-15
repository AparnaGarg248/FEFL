import React from 'react'
import ProductPage from './components/ProductPage'
import Electronics from './components/Electronics'
import Furniture from './components/Furniture'
import Clothing from './components/Clothing'
import RandomColor from './components/RandomColor'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RandomColor />} />
        <Route path='/product' element={<ProductPage />}>
          <Route path='/product/electronics' element={<Electronics />}/>
          <Route path='/product/clothing' element={<Clothing />}/>
          <Route path='/product/furniture' element={<Furniture />}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default App