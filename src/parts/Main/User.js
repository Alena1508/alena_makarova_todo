import { getInfoTask} from '../../services/tasks';

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
        <a href="/list">Go to the task list</a>
      </div>
    );
  }
}
