import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const ProductForm = () => {

    const navigate = useNavigate();


    const [id, setId] = useState('1000');
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(1);
    const [description, setDescription] = useState('');
    const [isOnSale, setIsOnSale] = useState(false);

    const [isLoading, setIsLoading] = useState(false);


    const handleInputChange = (fnc) => (event) => fnc(event.target.value);

    const handleCheckbox = (event) => {
        setIsOnSale(event.target.checked)
    };


    const saveProduct = () => {
        setIsLoading(true);

        axios.post('http://localhost:5000/products/create',
            { id, title, brand, category, type, img1, img2, price, stock, description, isOnSale }
        ).then(res => {
            console.log(res)
            setIsLoading(false);
            navigate('/products')
        }).catch(err => {
            console.log(err)
            setIsLoading(false);
        })

    }




    return (

        <section className='product-form'>

            <div className='product-input'>
                <label>ID:</label>
                <input type='text' value={id}
                    onChange={handleInputChange(setId)}
                />
            </div>

            <div className='product-input'>
                <label>Title:</label>
                <input type='text' value={title}
                    onChange={handleInputChange(setTitle)}
                />
            </div>

            <div className='product-input'>
                <label>Brand:</label>
                <input type='text' value={brand}
                    onChange={handleInputChange(setBrand)}
                />
            </div>

            <div className='product-input'>
                <label>Category:</label>
                <input type='text' value={category}
                    onChange={handleInputChange(setCategory)}
                />
            </div>

            <div className='product-input'>
                <label>Type:</label>
                <input type='text' value={type}
                    onChange={handleInputChange(setType)}
                />
            </div>

            <div className='product-input'>
                <label>Img1:</label>
                <input type='text' value={img1}
                    onChange={handleInputChange(setImg1)}
                />
            </div>

            <div className='product-input'>
                <label>Img2:</label>
                <input type='text' value={img2}
                    onChange={handleInputChange(setImg2)}
                />
            </div>

            <div className='product-input'>
                <label>Price:</label>
                <input type='number' value={price}
                    onChange={handleInputChange(setPrice)}
                />
            </div>


            <div className='product-input'>
                <label>Stock:</label>
                <input type='number' value={stock}
                    onChange={handleInputChange(setStock)}
                />
            </div>


            <div className='product-input'>
                <label>Description:</label>
                <textarea type='text' value={description} rows={1}
                    onChange={handleInputChange(setDescription)}

                />
            </div>

            <div className='product-input'>
                <label>Is On Sale:</label>
                <input type='checkbox' checked={isOnSale}
                    onChange={handleCheckbox}
                />
            </div>



            <div className='product-buttons'>

                <button className={isLoading ? 'yellow' : 'green'}
                    onClick={saveProduct} disabled={isLoading }
                >
                    {isLoading ? 'LOADING...' : 'Save'}

                </button>

            </div>

        </section>


    )
}

export default ProductForm