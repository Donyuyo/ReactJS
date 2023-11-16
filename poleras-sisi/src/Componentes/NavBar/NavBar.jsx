import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../Cartwidget/CartWidget';
import Logo from '../Logo/Logo';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="sticky-top">
            <Container fluid>
                <div className="navbar-content">
                    <div className="navbar-left">
                        <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                    </div>
                    <Nav className="navbar-center">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Poleras</Nav.Link>
                        <Nav.Link href="#pricing">Polerones</Nav.Link>
                        <Nav.Link href="#pricing">Otros</Nav.Link>
                        <Nav.Link href="#pricing"><CartWidget /></Nav.Link>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;
