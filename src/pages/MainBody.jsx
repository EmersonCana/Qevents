import React from 'react'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { Carousel } from '../components/Carousel'

export const MainBody = () => {
    const [results, setResults] = useState([])
    const productUrl = 'http://127.0.0.1:8000/api/products'
    const controller = new AbortController;

    useEffect(() => {
        async function getData() {
            const response = await fetch(productUrl)
            const data = await response.json();
            setResults(data);
        }

        getData()
        console.log('result: ' + results)

        return () => {
          controller.abort();
        }
      
    },[]);
    
  return (
    <>
    <div className="row">
      <Carousel />
    </div>
    <div className="row">
      <div className="col-12 py-5 d-flex justify-content-between">
        <span className="h2 custom-title">HOT PRODUCTS</span>
        <span className="h2 custom-title">HOT PRODUCTS</span>
        <span className="h2 custom-title">HOT PRODUCTS</span>
      </div>
    </div>
    <div className="row">
      {results.map((product) => 
        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
          <ProductCard key={product.id} details={product}/>
        </div>
      )}
    </div>
    </>
  )
}
