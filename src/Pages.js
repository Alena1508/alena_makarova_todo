import { Logined } from './Logined';
import { Unlogined } from './UnLogined';


export class Pages extends React.Component {

  render () {
    return this.props.user ?
      <Logined /> :
      <Unlogined onLogin={this.props.setLoginState} />
  }
};