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
    this.setState({ loading: true });
      const email = e.target.name.value;
      const password = e.target.password.value;

      e.preventDefault();


      login({email, password})
        // .then(data => data.json())
        .then((user) => {
          this.onLogin(user);
        });

    };

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loader /> :
        <form onSubmit={(e) => this.submit(e)}>
        <input type="text"
               placeholder="Name"
               name="name"
               defaultValue="admin@a.com"
               required/>
        <input type="password"
               name="password"
               placeholder="Password"
               defaultValue="admin"
               required/>
        <input type="submit"
               value="Логин"/>
      </form>
    );
  }
};