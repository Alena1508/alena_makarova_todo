import {Navigation} from '../Navigation/index';

import './header.scss';


export const Header = () => {

  return (
    <header className="header">
      <a href="/"><img src="/images/logo.svg" alt="todo" /></a>
      <Navigation />
    </header>
  )
};
