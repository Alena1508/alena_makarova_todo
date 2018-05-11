import { User } from './User';
import './main.scss';

export const Main = (user) => (
    <React.Fragment>
        <main className="main">
            <User user={user} />
        </main>
    </React.Fragment>
  );
