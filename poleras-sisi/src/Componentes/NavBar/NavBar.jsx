import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cartwidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-them="dark">
            <Container>
                <Navbar.Brand to="/"><Logo /></Navbar.Brand>

                    <Nav className="me-auto">
                        <Link to="/" className='pestaña'>Home</Link>
                        <Link to="/category/poleras" className='pestaña' >Poleras</Link>
                        <Link to="/category/polerones" className="pestaña" >Polerones</Link>
                        <Link to="/category/otros" className="pestaña" >Otros</Link>
                    </Nav>
                    <Link to="/cart"><CartWidget /></Link>
            </Container>
        </Navbar>
    );
}

export default NavBar;
