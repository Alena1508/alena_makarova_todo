import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './taskList.scss';
import { Tabs, Tab } from '../../components/Tabs/index';
import { deleteTask, updateTask, getTasks as getTasksRequest } from '../../services/tasks';
import { days } from '../../constants/consts';
import { getTasks, removeTask } from '../../store';


export class TaskListContainer extends React.Component {
  date = new Date().getDay();

  createTask = (day) => {
    this.props.history.push(`tasks/newtask?day=${day}`);
  };


    updateTaskList = () => {
      getTasksRequest()
        .then((taskList) => {
          this.props.getTasks(taskList);
        });
    };

  componentWillReceiveProps(nextProps) {

  }

  changeTask = (task) => {
      const taskList = [...this.props.taskList];
      updateTask(task)
        .then(() => this.setState({ taskList }));
    };


    changeTaskState = (task, state = false) => {
      task.done = state;
      this.changeTask(task);
    };


    handleDeleteTask = (id, indexWeek) => {
      deleteTask(id)
        .then(() => this.props.removeTask({ id, indexWeek }));
      this.forceUpdate();
    };

    componentDidMount() {
      return getTasksRequest()
        .then(taskList => this.props.getTasks(taskList));
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
                    onClick={() => this.handleDeleteTask(task.id, index)}
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

const mapDispatchToProps = {
  getTasks,
  removeTask
};

export const TaskList = connect(mapStoreToProps, mapDispatchToProps)(TaskListContainer);
