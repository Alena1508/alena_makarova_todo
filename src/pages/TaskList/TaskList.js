import './taskList.scss';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from '../../components/Tabs/index';
import {getTasks, deleteTask, updateTask} from '../../services/tasks';
import { days } from '../../consts';

export class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasksInWeek: []
        };
    }


    date = new Date().getDay();

    createTask = (day) => {
        this.props.history.push(`tasks/newtask?day=${day}`);
    };


    updateTaskList = () => {
        getTasks()
          .then(tasksInWeek => this.setState({tasksInWeek}));
    };

    changeTask = (task) => {
        let tasksInWeek = [...this.state.tasksInWeek];
        updateTask(task)
          .then(() => this.setState({ tasksInWeek }));
    };

    handleDeleteTask = (id) => {
        deleteTask(id)
          .then(() => this.updateTaskList());
    };

    handleDoneTask = (task) => {
        task.done = true;
        this.changeTask(task);
    };

    handleInProgressTask = (task) => {
        task.done = false;
        this.changeTask(task);
    };

    componentDidMount() {
        this.updateTaskList();
    }


    render() {

        return (
          <Tabs selectedIndex={this.date}>
              {this.state.tasksInWeek.map((tasks, index) => <Tab
                key={index}
                title={days[index]}
              >
                  <ol className="taskList">
                      {tasks.map((task) => <li key={task.id} className="taskList__item">
                          <Link
                            to={`/tasks/${task.id}`}
                            className={task.done ? 'done' : 'in-progress'}
                          >
                              {task.title}
                          </Link>
                          {task.done ? null :
                            <React.Fragment>
                                <span className="taskList__status in-progress"
                                      onClick={() => this.handleInProgressTask(task)}>~</span>
                                <span className="taskList__status delete"
                                      onClick={() => this.handleDeleteTask(task.id)}>X</span>
                                <span className="taskList__status done"
                                      onClick={() => this.handleDoneTask(task)}>V</span>
                            </React.Fragment>
                          }
                      </li>)}
                  </ol>
                  <button className="taskList__btn" onClick={() => this.createTask(index)}>Add new task</button>
              </Tab>)}
          </Tabs>
        )
    }
};