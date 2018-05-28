import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './taskList.scss';
import { Tabs, Tab } from '../../components/Tabs/index';
import { days } from '../../constants/consts';
import { getTasksAsync, updateTasksAsync, deleteTaskAsync } from '../../store';


export class TaskListContainer extends React.Component {
  date = new Date().getDay();

  createTask = (day) => {
    this.props.history.push(`tasks/newtask?day=${day}`);
  };


  changeTask = (task) => {
    this.props.updateTask(task);
  };


  changeTaskState = (task, state = false) => {
    task.done = state;
    this.changeTask(task);
  };


  handleDeleteTask = (id) => {
    this.props.deleteTask(id);
  };

  componentDidMount() {
    this.props.getTasks();
  }


  render() {
    return (
      <Tabs selectedIndex={this.date}>
        {this.props.taskList.map((tasks, index) => (<Tab
          key={index}
          title={days[index]}
        >
          <ol className="taskList">
            {tasks.map(task => (<li key={task.id} className="taskList__item">
              <Link
                to={`/tasks/${task.id}`}
                className={`${task.done ? 'done' : ''} ${task.done === false ? 'in-progress' : ''}`}
              >
                {task.title}
              </Link>
              {task.done ? null :
              <React.Fragment>
                <span
                  className="taskList__status in-progress"
                  onClick={() => this.changeTaskState(task)}
                >~
                </span>
                <span
                  className="taskList__status delete"
                  onClick={() => this.handleDeleteTask(task.id)}
                >X
                </span>
                <span
                  className="taskList__status done"
                  onClick={() => this.changeTaskState(task, true)}
                >V
                </span>
              </React.Fragment>
              }
            </li>))}
          </ol>
          <button className="taskList__btn" onClick={() => this.createTask(index)}>Add new task</button>
        </Tab>))}
      </Tabs>
    );
  }
}

const mapStoreToProps = ({ taskList }) => ({
  taskList
});

const mapDispatchToProps = dispatch => ({
  getTasks() { dispatch(getTasksAsync()); },
  updateTask(data) { dispatch(updateTasksAsync(data)); },
  deleteTask(data) { dispatch(deleteTaskAsync(data)); }
});

export const TaskList = connect(mapStoreToProps, mapDispatchToProps)(TaskListContainer);
