import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "../pages/Home";
import { Col, Container } from "react-bootstrap";
import { Contact } from "../Contact";
import { News } from "../News";

function NavbarMenu() {
	return (
		<>
			<Router key="navbar">
				<div>
					<Navbar bg="light" expand="lg">
						<Container>
							<Col className="columns navbar-column-1" xs={6} sm={9} md={6}>
								<Navbar.Brand href="/">The YAY Company</Navbar.Brand>
							</Col>

							<Col className="columns navbar-column-3" xs={{ order: "last" }}>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
							</Col>
							<Col className="columns navbar-column-4" xs={{ order: "second" }}>
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="mr-auto">
										<NavLink to="/">Home</NavLink>
										<NavLink to="/news">News</NavLink>
										<NavLink to="/contact">Contact</NavLink>
									</Nav>
								</Navbar.Collapse>
							</Col>
						</Container>
					</Navbar>

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/News">
							<News />
						</Route>

						<Route path="/Contact">
							<Contact />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default NavbarMenu;
