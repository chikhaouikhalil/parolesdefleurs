import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        className="navbar-header"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container style={{ paddingTop: "-10px" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                fluid
                width="260px"
                height="auto"
                className="img-responsive"
                src="/assets/logo.svg"
                alt="logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/home">
                <Nav.Link>
                  <i className="fas fa-home pr-1"></i>
                  <span className="link-text">Acceuil</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/shop">
                <Nav.Link>
                  <i className="fas fa-shopping-cart pr-1"></i>
                  <span className="link-text">Boutique</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user pr-1"></i>
                  <span className="link-text">Mon compte</span>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                  <i className="fas fa-info-circle pr-1"></i>
                  <span className="link-text">About</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
