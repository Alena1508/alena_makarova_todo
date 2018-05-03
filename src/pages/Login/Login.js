import { Link } from 'react-router-dom';
import './login.scss';
import { Loader } from '../../components';
import { login } from '../../services';



export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.onLogin = this.props.onLogin;
  }


  submit = (e) => {
    this.setState({loading: true});
    const email = e.target.name.value;
    const password = e.target.password.value;

    e.preventDefault();


    login({ email, password })
      .then((user) => {
        this.onLogin(user);
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
          onSubmit={ (e) => this.submit(e) }
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
            <button className="form-login__btn">
              <Link to={`/registration`}>
                Registration
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
};