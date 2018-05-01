import {Link} from 'react-router-dom';
import {Tabs, Tab} from '../../components/Tabs/index';
import { getTasks} from "../../services/tasks";

export class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksInWeek: []
    };
  }
  days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  date = new Date().getDay();

  createTask = (day) => {
    this.props.history.push(`tasks/newtask?day=${day}`);
  };

  componentDidMount() {
    getTasks()
      .then(tasksInWeek => this.setState({ tasksInWeek }));
  }


  render() {

    return (
      <Tabs>
        {this.state.tasksInWeek.map((tasks, index) => <Tab
          key={index}
          title={this.days[index]}
        >
          <ol>
            {tasks.map(task => <li key={task.id}>
              <Link to={`/tasks/${task.id}`}>
                {task.title}
              </Link>
            </li>)}
          </ol>
          <button onClick={() => this.createTask(index)}>Add new task</button>
        </Tab>)}
      </Tabs>
    )
  }
};