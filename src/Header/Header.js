import { Navigation } from '../Navigation';

import './header.scss';

const navLinks = ['Home', 'Products', 'Contacts'];

export const Header = () => (
  <header className="header">
    <a href="/"><img src="images/logo.png" alt="todo" /></a>
    <Navigation navLinks={navLinks} />
  </header>
);
