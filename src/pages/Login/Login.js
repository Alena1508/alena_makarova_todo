import { connect } from 'react-redux';
import './login.scss';

import { Loader } from '../../components';
import { login } from '../../services';
import { setUser } from '../../store';


export class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }


  submit = (e) => {
    this.setState({ loading: true });
    const email = e.target.name.value;
    const password = e.target.password.value;

    e.preventDefault();


    login({ email, password })
      .then((user) => {
        this.props.dispatch(setUser(user));
      })
      .catch(err => console.log('Can\'t login', err));
  };

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loader /> :
      <div className="form-wrapper">
        <form
          className="form-login"
          onSubmit={this.submit}
        >
          <input
            className="form-login__field"
            type="text"
            placeholder="Name"
            name="name"
            defaultValue="admin@a.com"
            required
          />
          <input
            className="form-login__field"
            type="password"
            name="password"
            placeholder="Password"
            defaultValue="admin"
            required
          />
          <div className="form-login__buttons">
            <button
              className="form-login__btn"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = ({ user }) => ({
  user
});

export const Login = connect(mapStoreToProps)(LoginContainer);
