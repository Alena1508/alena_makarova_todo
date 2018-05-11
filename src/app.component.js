import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser, logout } from './services';
import { setUser } from "./store";

import './common.scss';


export class AppComponent extends React.Component {


  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  };

  setLogout = () => {
    logout()
      .then(this.setState({ user: null }));
  };

  componentDidMount() {
    checkUser()
      .then((data) => {
        this.setLoginState(data);
      })
      .catch(err => {
        this.setLoginState(null);
        console.log('Can\'t login', err);
      });
  }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className="wrapper">
          <Header logout={this.setLogout}
                  user={user}
          />
          {
            user !== false ?
              <Pages user={user}
                     setLoginState={this.setLoginState}
              /> : <Loader/>
          }
          <div className="push"></div>
        </div>
        <Footer/>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = state => ({
    user: state.user
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));