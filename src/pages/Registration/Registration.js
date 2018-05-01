
import './registration.scss';
import { Loader } from '../../components';
import { registration } from '../../services/users';


export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    // this.onLogin = this.props.onLogin;
  }


  submit = (e) => {
    this.setState({ loading: true });
    const firstname = e.target.name.value;
    const lastname = e.target.lastname.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRepeat = e.target.passwordrepeat.value;

    e.preventDefault();


    registration({ firstname, lastname, email, password, passwordRepeat })
      .then(() => this.props.history.push('/thankYouPage'))
      .catch(err => console.log('Can\'t login', err));

  };


  render() {
    const { loading } = this.state;
    return (
      loading ? <Loader /> :
        <form
          onSubmit={ (e) => this.submit(e) }
        >
          <input
            type="text"
            placeholder="Name"
            name="firstname"
            defaultValue="admin@a.com"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            defaultValue="admin@a.com"
            required
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            defaultValue="admin@a.com"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue="admin"
            required
          />
          <input
            type="password"
            name="passwordrepeat"
            placeholder="Repeat Password"
            defaultValue="admin"
            required
          />
          <input
            type="submit"
            value="Регистрация"
          />
        </form>
    );
  }
};