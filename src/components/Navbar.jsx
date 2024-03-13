import { Button, Form } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Navbar bg="info" data-bs-theme="dark" className=''>
                <Container className='w-50'>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
                <Container className='w-50'>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                    <Button variant='primary' className='px-4 m-0'>Login </Button>
                    <Button variant='light' className='m-0'>Sign up </Button>

                    <Link to='/cart'>

                        <Cart variant="dark" style={{ fontSize: "23px" }} />
                    </Link>

                </Container>
            </Navbar >


        </>
    );
}

export default Header;