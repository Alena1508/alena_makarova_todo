import { User } from './User';


import './main.scss';

export class Main extends React.Component {
  state = {
    users: [],
    posts: [],
  };





  render() {
    return (
      <React.Fragment>
        <main className="main">
          <User user={this.props.user} />
        </main>
      </React.Fragment>
    );
  }
}
