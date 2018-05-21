import { ToastContainer } from 'react-toastr';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser, errObserver } from './services';
import { setUser } from './store';

import './common.scss';


export class AppComponent extends React.Component {
    setLoginState = (user) => {
      this.props.dispatch(setUser(user));
    };

    componentDidMount() {
      checkUser()
        .then((data) => {
          this.setLoginState(data);
        })
        .catch(() => {
          this.props.dispatch(setUser(null));
        });

      errObserver.addObserver((err = 'Something goes wrong') => this.props.user !== false && this.container.error(
        <strong>{err}</strong>,
        <em>Error</em>
      ));
    }

    render() {
      const { user } = this.props;

      return (
        <React.Fragment>
          <div className="wrapper">
            <ToastContainer
              ref={ref => this.container = ref}
              className="toast-top-right"
            />
            <Header />
            {
                      user !== false ?
                        <Pages
                          user={user}
                        /> : <Loader />
                  }
            <div className="push" />
          </div>
          <Footer />
        </React.Fragment>
      );
    }
}

const mapStoreToProps = state => ({
  user: state.user
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
