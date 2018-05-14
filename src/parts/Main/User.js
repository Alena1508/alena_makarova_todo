import { connect } from 'react-redux';
import { getInfoTask} from '../../services/tasks';
import {Link} from 'react-router-dom';
import { getInfoUser} from "../../store";

export class UserContainer extends React.Component {

  componentDidMount() {
    getInfoTask()
      .then((tasksInfo) => this.props.dispatch(getInfoUser(tasksInfo)));
  }

  render() {
    const { user, tasksInfo } = this.props;
    return (
      <div className="user-info">
        {user && <h2>{user.firstName}</h2>}
        <p>{`You have ${tasksInfo.total} tasks`}</p>
        <p>{`Done: ${tasksInfo.done} `}</p>
        <p>{`In progress: ${tasksInfo.inProgress} `}</p>
        <p>{`Waiting: ${tasksInfo.waiting} `}</p>
        <Link to={`/tasks`}>Go to the task list</Link>
      </div>
    );
  }
}

const mapStoreToProps = ({ user, tasksInfo }) => ({
    user, tasksInfo
});

export const User = connect(mapStoreToProps)(UserContainer);