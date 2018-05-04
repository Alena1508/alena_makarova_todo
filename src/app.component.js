import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastr';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser, logout, errObserver } from './services';


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
    errObserver.addObserver((err = 'Something wrong') => this.state.user !== undefined && this.container.error(
      <strong>{err}</strong>,
      <em>Error</em>
    ));
  }


  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
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