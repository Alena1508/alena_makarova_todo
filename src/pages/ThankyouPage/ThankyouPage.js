import {Link} from 'react-router-dom';
import './thankyouPage.scss';

export const ThankyouPage = () => {

    return (
      <React.Fragment>
        <div className="thank-you">
          <p>Thank you for your registration!!!!</p>
          <img src="/images/thanks.gif" alt="todo"/>
          <Link to={`/login`}>Login</Link>
        </div>
      </React.Fragment>
    )

}