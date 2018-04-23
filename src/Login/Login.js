import './login.scss';
import { Loader } from '../Loader';


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
      const value = e.target.name.value;

      e.preventDefault();

      setTimeout(() => {
        this.onLogin(true, value);
      }, 3000);

    };

  render() {
    const { loading } = this.state;
    return (
      loading ? <Loader /> :
        <form onSubmit={(e) => this.submit(e)}>
        <input type="text" placeholder="Name"
               name="name" required/>
        <input type="password" placeholder="Password"
               required/>
        <input type="submit" value="Логин"/>
      </form>
    );
  }
};