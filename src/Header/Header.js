import { Navigation } from '../Navigation';

import './header.scss';

const navLinks = ['Home', 'Products', 'Contacts'];

export const Header = () => (
  <header className="header">
    <a href="/">Logo</a>
    <Navigation navLinks={navLinks} />
  </header>
);
