import './navigation.scss';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';


export const Navigation = ({ user, logout }) => (
  <nav className="main-nav">
      {
          user ?
          <ul className="menu">
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
              <li>
                  <NavLink
                    to="/"
                    activeClassName="active"
                  >
                      {user.firstName}
                  </NavLink>

                <ul className="sub-menu">
                  <li>
                    <NavLink
                      to="/change-user"
                      activeClassName="active"
                    >
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>

              </li>
          </ul> :
          <button>
            <Link to={`/registration`}>
            Registration
            </Link>
          </button>
      }
  </nav>
);
