import './navigation.scss';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';


export const Navigation = ({ user }) => (
  <nav className="main-nav">
    <ul>
      <li>
        <NavLink
          to="/"
          exact
          activeClassName="active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tasks"
          activeClassName="active"
        >
          Tasks
        </NavLink>
      </li>

      {user && <li><strong>{user.firstName}</strong></li>}
    </ul>
  </nav>
);
