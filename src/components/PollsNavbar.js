import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

const PollsNavbar = (props) => {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Jake Poe | Employee Polls
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/leaderboard">
              Leaderboard
            </Nav.Link>
            <Nav.Link as={Link} to="/new">
              New Poll
            </Nav.Link>
            <NavDropdown
              title={
                props.authedUser?.name ? props.authedUser?.name : 'Profile'
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text className="justify-content-end"></Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(PollsNavbar);
