import {Navigation} from '../Navigation/index';

import './header.scss';


export const Header = ({user, logout }) => {

  return (
    <header className="header">
      <a href="/"><img src="/images/logo.svg" alt="todo" /></a>
      <Navigation user={user} />
      {user && <button className="header__logout" onClick={logout}>Logout</button>}
    </header>
  )
};
