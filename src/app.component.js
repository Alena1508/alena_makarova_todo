import { Route } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Pages } from './Pages';

export class App extends React.Component {
  state = {
    login: true,
    user: ''
  };

  setLoginState = (login, user) => {
    this.setState({login, user});
  };



  render() {
    const {login, user} = this.state;


    return (
      <React.Fragment>
        <Header login={login}
                logout={this.setLoginState}
                user={user}
        />
        <Pages login={login}
               setLoginState={this.setLoginState}/>
        <Footer/>
      </React.Fragment>
    );
  }
}