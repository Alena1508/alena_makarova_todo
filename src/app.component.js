import { Route } from 'react-router-dom';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import {Loader} from "./components/Loader/Loader";
import { checkUser } from './services';

export class App extends React.Component {
  state = {
    user: undefined
  };

  setLoginState = (user) => {
    this.setState({user});
  };

  setLogout = () => {
    fetch('http://localhost:8081/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    })
      .then(this.setState({ user: null }))
  };

  componentDidMount() {
    checkUser()
      .then((data) => {
        this.setLoginState(data);
      })
      .catch(err => console.log('Can\'t login', err));
  }



  render() {
    const { user } = this.state;


    return (
      <React.Fragment>
        <Header logout={this.setLogout}
                user={user}
        />
        {
          user !== undefined ?
            <Pages user={user}
                   setLoginState={this.setLoginState}
            /> : <Loader />
        }
        <Footer/>
      </React.Fragment>
    );
  }
}