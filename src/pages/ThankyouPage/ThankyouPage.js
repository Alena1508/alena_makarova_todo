import {Link} from 'react-router-dom';

export class ThankyouPage extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <React.Fragment>
      <p>Thank you for your registration!!!!</p>
        <Link to={ `/login`}>Login</Link>
      </React.Fragment>
    )
  }
}