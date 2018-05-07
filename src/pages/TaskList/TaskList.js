// import './taskList.scss';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from '../../components/Tabs/index';
import { getTasks, deleteTask, updateTask } from '../../services/tasks';

export class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksInWeek: []
    };
  }
  days = ['Sun', 'Mon', 'Thur', 'Wed', 'Th', 'Fr', 'St'];
  date = new Date().getDay();

  createTask = (day) => {
    this.props.history.push(`tasks/newtask?day=${day}`);
  };


  handleDeleteTask = (id) => {
    deleteTask(id)
      .then(() => this.updateTaskList());
  };

  updateTaskList = () => {
    getTasks()
      .then(tasksInWeek => this.setState({tasksInWeek}));
  };

  handleDoneTask = (task) => {
    task.done = true;
    updateTask(task)
      .then(() => this.updateTaskList());
  };

  handleInProgressTask = (task) => {
    task.done = false;
    updateTask(task)
      .then(() => this.updateTaskList());
  };

  componentDidMount() {
    this.updateTaskList();
  }


  render() {

    return (
      <Tabs>
        {this.state.tasksInWeek.map((tasks, index) => <Tab
          key={index}
          title={this.days[index]}
        >
          <ol className="taskList">
            {tasks.map((task) => <li key={task.id} className="taskList__item">
              <Link
                to={`/tasks/${task.id}`}
                className={task.done? 'done': 'in-progress' }
              >
                {task.title}
              </Link>
              {task.done ? null :
                <React.Fragment>
                  <span className="taskList__status in-progress" onClick={() => this.handleInProgressTask(task)}>~</span>
                  <span className="taskList__status delete" onClick={() => this.handleDeleteTask(task.id)}>X</span>
                  <span className="taskList__status done" onClick={() => this.handleDoneTask(task)}>V</span>
                </React.Fragment>
              }
            </li>)}
          </ol>
          <button onClick={() => this.createTask(index)}>Add new task</button>
        </Tab>)}
      </Tabs>
    )
  }
};