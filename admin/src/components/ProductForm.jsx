import React, { useState } from 'react'

const ProductForm = () => {

    const [id, setId] = useState('1000');
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(1);
    const [isOnSale, setIsOnSale] = useState(false);


  return (
    
      <section className='product-form'>

          <div className='product-input'>
              <label>ID:</label>
              <input type='text' value={id}/>
          </div>

          <div className='product-input'>
              <label>Title:</label>
              <input type='text' value={title} />
          </div>

          <div className='product-input'>
              <label>Brand:</label>
              <input type='text' value={brand} />
          </div>

          <div className='product-input'>
              <label>Category:</label>
              <input type='text' value={category} />
          </div>

          <div className='product-input'>
              <label>Type:</label>
              <input type='text' value={type} />
          </div>

          <div className='product-input'>
              <label>Img1:</label>
              <input type='text' value={img1} />
          </div>

          <div className='product-input'>
              <label>Img2:</label>
              <input type='text' value={img2} />
          </div>

          <div className='product-input'>
              <label>Price:</label>
              <input type='number' value={price} />
          </div>


          <div className='product-input'>
              <label>Stock:</label>
              <input type='number' value={stock} />
          </div>


          <div className='product-input'>
              <label>Description:</label>
              <textarea type='text' value={description}  rows={1}/>
          </div>

          <div className='product-input'>
              <label>Is On Sale:</label>
              <input type='checkbox' value={isOnSale} />
          </div>


          
          <div className='product-buttons'>
            <button className='green'>Save</button>

          </div>

        </section>
      
      
  )
}

export default ProductForm