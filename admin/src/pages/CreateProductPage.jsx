import React from 'react'
import { Link } from 'react-router-dom'
import ProductForm from '../components/ProductForm'

const CreateProductPage = () => {



  return (
    <main>
      
 
      <Link to='/admin'>
        <button>Home</button>
      </Link>
      &nbsp;
      <Link to='/products'>
        <button>Products</button>
      </Link>


        <h1>Created Product Page</h1>

        <ProductForm />


    </main>
  )
}

export default CreateProductPage