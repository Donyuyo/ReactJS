import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
            <NavLink to="/" className="navbar-brand">
            <Logo />
            </NavLink>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
                <NavLink  to="/" className="nav-link">
                Home
                </NavLink>
                <NavLink to="/category/poleras" className="nav-link">
                Poleras
                </NavLink>
                <NavLink to="/category/polerones" className="nav-link">
                Polerones
                </NavLink>
                <NavLink to="/category/otros" className="nav-link">
                Otros
                </NavLink>
            </Nav>
            <NavLink to="/cart">
                <CartWidget />
            </NavLink>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavBar;