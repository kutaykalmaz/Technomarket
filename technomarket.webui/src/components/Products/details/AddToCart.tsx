import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import './styles/AddToCart.css'
import { BiCart } from 'react-icons/bi'

const AddToCart = () => {

    const [quantity, setQuantity] = useState(0);

    return (
        <>
            <Grid.Column width='4' style={{paddingRight:'0px'}}>
                <div className="quantity">
                    <button
                        className={quantity === 0 ? 'disabled decrease' : 'decrease'}
                        type='button'
                        onClick={(() => quantity !== 0 && setQuantity(quantity - 1))}
                    >
                        -
                    </button>
                    <input type="text" id='quantity' value={quantity} readOnly />
                    <button className='increase' type='button' onClick={(() => setQuantity(quantity + 1))}>+</button>
                </div>
            </Grid.Column>
            <Grid.Column width='12'>
                <button className='btn'>
                    <BiCart style={{fontSize:'18px', marginRight:'10px'}} />
                    Sepete Ekle
                </button>
            </Grid.Column>

        </>
    )
}

export default AddToCart
