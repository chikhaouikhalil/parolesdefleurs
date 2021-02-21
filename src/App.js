import React from "react";
import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
