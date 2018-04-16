import './navigation.scss';


export const Navigation = ({ navLinks }) => {
  const navLinksItem = navLinks.map(navLink =>
    <li><a href={`/${navLink.toLowerCase()}`}>{navLink}</a></li>);

  return (
    <nav className="main-nav">
      <ul>{navLinksItem}</ul>
    </nav>
  );
};
