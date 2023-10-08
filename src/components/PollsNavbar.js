import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const PollsNavbar = (props) => {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Jake Poe
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
            <Navbar.Collapse className="justify-content-end">
              {/* 
              TODO: RENDER PFP
              <img
                src={props.authedUser?.avatarUrl}
                alt={`${props.authedUser?.name}'s profile picture.`}
              />
              */}
              <Navbar.Text>
                {props.authedUser?.name ? props.authedUser?.name : 'Profile'}
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser
}))(PollsNavbar);
