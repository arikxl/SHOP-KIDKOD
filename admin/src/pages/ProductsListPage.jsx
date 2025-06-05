import React from 'react'
import { Link } from 'react-router-dom'
import LogoutBtn from '../components/LogoutBtn'





const ProductsListPage = ({ setUser, productsFromDB }) => {




  return (
    <main>
      
      <h1>Products: {productsFromDB.length}</h1>

      {/* <Link to='/create-product'>
        <button className='green'>New Product</button>      
      </Link> */}


      {/* <section>
        {products.map((product) => (

          <Link key={product.id} to={`/product/${product.id}`}>
            <h2 >{product.title}: ${product.price}</h2>
          </Link>


        ))}
      </section> */}

      {/* <Link to="/admin">
        <button>Home</button>
      </Link>
      &nbsp;
      <LogoutBtn setUser={setUser} /> */}

    </main>
  )
}

export default ProductsListPage