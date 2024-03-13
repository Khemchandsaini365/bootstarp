import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import '../App.css'

function Kard({ img, title, price }) {
    return (
        <Card style={{ width: '18rem' }} className='m-1'>
            <Card.Img variant="top" className='w-50 ' src={img} alt='img' />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>

                <Card.Text>

                </Card.Text>
                <div className='d-flex justify-content-between'>
                    <Button variant="primary">Add to cart</Button>
                    <Button variant="info">Remove </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

function ProductCard({ products }) {

    return (
        <div className='d-flex flex-wrap px-4 mt-5 bg-secondary'>
            {products.map((item) => <Kard key={item.id} img={item.image} title={item.title} price={item.price} />)}
        </div>
    )
}

export default ProductCard;