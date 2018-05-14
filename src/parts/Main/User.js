import { connect } from 'react-redux';
import { getInfoTask } from '../../services/tasks';
import { Link } from 'react-router-dom';
import { getInfoUser } from '../../store';

export class UserContainer extends React.Component {
  componentDidMount() {
    getInfoTask()
      .then(tasksInfo => this.props.dispatch(getInfoUser(tasksInfo)));
  }

  render() {
    const { user, information } = this.props;
    return (
      <div className="user-info">
        {user && <h2>{user.firstName}</h2>}
        <p>{`You have ${information.total} tasks`}</p>
        <p>{`Done: ${information.done} `}</p>
        <p>{`In progress: ${information.inProgress} `}</p>
        <p>{`Waiting: ${information.waiting} `}</p>
        <Link to="/tasks">Go to the task list</Link>
      </div>
    );
  }
}

const mapStoreToProps = ({ user, information }) => ({
  user, information
});

export const User = connect(mapStoreToProps)(UserContainer);
