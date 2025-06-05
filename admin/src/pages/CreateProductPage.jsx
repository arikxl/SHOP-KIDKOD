import React from 'react'
import { Link } from 'react-router-dom'

const CreateProductPage = () => {



  return (
    <main>
      
      CreateProductPage

      <br/>
      <Link to='/admin'>
        <button>Home</button>
      </Link>
      &nbsp;
      <Link to='/products'>
        <button>Products</button>
      </Link>
    </main>
  )
}

export default CreateProductPage