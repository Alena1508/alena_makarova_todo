import { ToastContainer } from 'react-toastr';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser, errObserver } from './services';
import { getUser, setError } from './store';

import './common.scss';


export class AppComponent extends React.Component {
  componentDidUpdate() {
    if (this.props.error) {
      this.container.error(
        <strong>{this.props.error}</strong>,
        <em>Error</em>
      );

      this.props.dispatch(setError(''));
    }
  }

  componentDidMount() {
    this.props.dispatch(getUser());

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
  user: state.user,
  error: state.error
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
