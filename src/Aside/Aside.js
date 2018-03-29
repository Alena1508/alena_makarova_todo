import { User } from './User';


import './aside.scss';

export const Aside = () => (
  <aside className="aside">
    <ul>
      <li>
        <a href="/FrontEnd"> Front-End </a>
      </li>
      <li>
        <a href="/ceo"> CEO </a>
      </li>
    </ul>
    <User />
  </aside>
);
