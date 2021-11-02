import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Travell Bangladesh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="custome_nav" to="/home">Home</NavLink>
                        <NavLink className="custome_nav" to="/login">Login</NavLink>
                        <NavLink className="custome_nav" to="/new-plan">Make Plan</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="admin_link" to="/admin">Admin Panale</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;