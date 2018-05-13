import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import './navigation.scss';
import { removeUser } from '../../store';
import { logout } from '../../services';


export class NavigationContainer extends React.Component {
  handleLogout = () => {
    logout()
      .then(this.props.dispatch(removeUser()));
  };

  render() {
    const { user } = this.props;
    return (
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
                    <button onClick={this.handleLogout}>Logout</button>
                  </li>
                </ul>

              </li>
            </ul> :
            <button>
              <Link to="/registration">
                Registration
              </Link>
            </button>
        }
      </nav>
    );
  }
}


const mapStoreToProps = ({ user }) => ({
  user
});

export const Navigation = connect(mapStoreToProps)(NavigationContainer);

