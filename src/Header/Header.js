import {Navigation} from '../Navigation';

import './header.scss';


export const Header = ({user, login, logout }) => {

  return (
    <header className="header">
      <a href="/"><img src="images/logo.png" alt="todo"/></a>
      <Navigation user={user}/>
      {login && <button onClick={() => logout()}>Logout</button>}
    </header>
  )
};
