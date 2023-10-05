import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav className="nav">
      {/** TODO: Change to hamburger menu accordion */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">Leaderboard</Link>
        </li>
        <li>
          <Link to="/new">Login</Link>
        </li>
      </ul>
      {/** TODO: Add section for user details */}
    </nav>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  user: authedUser
});

export default Nav;
