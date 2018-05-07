import { Route } from 'react-router-dom';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser, logout } from './services';

import './common.scss';


export class App extends React.Component {
  state = {
    user: undefined
  };

  setLoginState = (user) => {
    this.setState({ user });
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
    const { user } = this.state;

    return (
      <React.Fragment>
        <div className="wrapper">
          <Header logout={this.setLogout}
                  user={user}
          />
          {
            user !== undefined ?
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