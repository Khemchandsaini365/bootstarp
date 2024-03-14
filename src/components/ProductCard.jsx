import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { add } from '../redux/features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
// import '../App.css'
function Kard({ data }) {
    const CartItems = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(add(item));
    }
    const generateqty = (productid) => {
        const Item = CartItems.find((i) => i.id === productid);
        return Item ? Item.quantity : 0;
    }
    return (
        <Card style={{ width: '18rem' }} className='m-1 bg-dark'>
            <Card.Img variant="top" className='w-50 ' src={data.image} alt='img' />
            <Card.Body>
                <Card.Title>
                    {data.title}
                </Card.Title>

                <Card.Text>
                    {data.price}
                </Card.Text>
                <Card.Text>
                    Slected:{generateqty(data.id)}
                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary" onClick={() => addToCart(data)}>Add to cart</Button>
                    <Button variant="info">Remove </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

function ProductCard({ products }) {

    return (
        <div className='d-flex flex-wrap px-4 mt-5 bg-secondary'>
            {products.map((item) => <Kard key={item.id} data={item} />)}
        </div>
    )
}

export default ProductCard;