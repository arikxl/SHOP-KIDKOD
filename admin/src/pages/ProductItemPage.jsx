import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductItemPage = ({ products }) => {


  const id = +useParams('id').id;

  const [product, setProduct] = useState({});

  useEffect(() => {
    const p = products.find((product) => product.id === id)

    setProduct(p)
  }, [])


  return (
    <main>
      Product: {id}
      <h3>{product.title}</h3>
      <h3>${product.price}</h3>

      <Link to='/products'>
        <button>Products</button>
      </Link>
      &nbsp;
      <Link to='/admin'>
        <button>Home</button>
      </Link>
    </main>
  )
}

export default ProductItemPage