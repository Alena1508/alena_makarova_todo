import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">&copy; {new Date().getFullYear()}</div>
    <div className="footer__author">Alena Makarova</div>
  </footer>
);
