import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Footer } from './parts';
import { Pages } from './Pages';
import { Loader } from './components/Loader/Loader';
import { checkUser } from './services';
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
      .catch((err) => {
        this.setLoginState(null);
        console.log('Can\'t login', err);
      });
  }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className="wrapper">
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
