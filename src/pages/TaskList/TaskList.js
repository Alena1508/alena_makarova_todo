import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './taskList.scss';
import { Tabs, Tab } from '../../components/Tabs/index';
import { deleteTask, updateTask, getTasks as getTasksRequest } from '../../services/tasks';
import { days } from '../../constants/consts';
import { getTasks } from '../../store';


export class TaskListContainer extends React.Component {
  date = new Date().getDay();

  createTask = (day) => {
    this.props.history.push(`tasks/newtask?day=${day}`);
  };


    updateTaskList = () => {
        getTasksRequest()
          .then(tasksInWeek => this.props.getTasks(tasksInWeek));
    };

    changeTask = (task) => {
        const tasksInWeek = [...this.props.tasksInWeek];
        console.log(tasksInWeek);
        updateTask(task)
          .then(() => this.setState({tasksInWeek}));
    };


    changeTaskState = (task, state = false) => {
        task.done = state;
        console.log(task.done);
        this.changeTask(task);
        console.log(task);
    };


    handleDeleteTask = (id) => {
        deleteTask(id)
          .then(() => this.updateTaskList());
    };

  componentDidMount() {
    return getTasksRequest()
      .then(tasksInWeek => this.props.getTasks(tasksInWeek));
  }


  render() {
    return (
      <Tabs selectedIndex={this.date}>
        {this.props.tasksInWeek.map((tasks, index) => (<Tab
          key={index}
          title={days[index]}
        >
          <ol className="taskList">
            {tasks.map(task => (<li key={task.id} className="taskList__item">
              <Link
                to={`/tasks/${task.id}`}
                className={task.done ? 'done' : 'in-progress'}
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

const mapStoreToProps = state => ({
  tasksInWeek: state.taskList
});

const mapDispatchToProps = {
  getTasks
};

export const TaskList = connect(mapStoreToProps, mapDispatchToProps)(TaskListContainer);
