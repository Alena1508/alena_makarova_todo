
import { Logined } from './Logined';
import { Unlogined } from './UnLogined';


export const Pages = ({ user }) => (
  <React.Fragment>
    {
      user ?
        <Logined /> :
        <Unlogined />
    }
  </React.Fragment>
);

