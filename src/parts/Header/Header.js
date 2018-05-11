import {Navigation} from '../Navigation/index';

import './header.scss';


export const Header = ({user, logout}) => {

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.svg" alt="todo" />
      </div>
      <Navigation user={user} logout={logout}/>
    </header>
  )
};
