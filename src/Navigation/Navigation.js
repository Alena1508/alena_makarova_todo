import  './navigation.scss';


const navLinks = ['Home', 'Products', 'Contacts'];
const navLinksItem = navLinks.map((navLink) =>
  <li>{navLink}</li>
);
export const Navigation = () => (
    <nav className={'main-nav'}>
      <ul>{navLinksItem}</ul>
    </nav>
);
