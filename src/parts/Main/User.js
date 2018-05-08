import { getInfoTask} from '../../services/tasks';
import {Link} from 'react-router-dom';

export class User extends React.Component {
  state = {
    tasksInfo: {}
  };

  componentDidMount() {
    getInfoTask()
      .then(tasksInfo => this.setState({ tasksInfo }));
  }

  render() {
    const { tasksInfo } = this.state;
    return (
      <div className="user-info">
        {this.props.user && <h2>{this.props.user.firstName}</h2>}
        <p>{`You have ${tasksInfo.total} tasks`}</p>
        <p>{`Done: ${tasksInfo.done} `}</p>
        <p>{`In progress: ${tasksInfo.inProgress} `}</p>
        <p>{`Waiting: ${tasksInfo.waiting} `}</p>
        <Link to={`/tasks`}>Go to the task list</Link>
      </div>
    );
  }
}
