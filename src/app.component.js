import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastr';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser, logout, errObserver } from './services';
import { connect } from 'react-redux';
import { setUser, removeUser } from './store';
import { withRouter } from 'react-router-dom';


export class AppComponent extends React.Component {

  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  };

  setLogout = () => {
    logout()
      .then(this.props.dispatch(removeUser()));
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
    errObserver.addObserver((err = 'Something wrong') => this.props.user !== false && this.container.error(
      <strong>{err}</strong>,
      <em>Error</em>
    ));
  }


  render() {
    const { user } = this.props;

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
          user !== false ?
            <Pages user={user}
                   setLoginState={this.setLoginState}
            /> : <Loader />
        }
        <Footer/>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = state => ({
  user: undefined
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));