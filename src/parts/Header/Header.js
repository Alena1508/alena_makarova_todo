import { Link } from 'react-router-dom';
import {Navigation} from '../Navigation/index';

import './header.scss';


export const Header = () => {

  return (
    <header className="header">
      <Link
        to={`/`}
        className="logo">
            <img src="/images/logo.svg" alt="todo" />
      </Link>
      <Navigation />
    </header>
  )
};
