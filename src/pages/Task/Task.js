import { getTask, updateTask, createTask } from '../../services';
import './task.scss';

export class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      done: undefined
    }
  }

  onChange = (event) => {
    const { target } = event;
    this.setState({ [target.name]: target.value })
  };


  componentDidMount() {
    const { task } = this.props.match.params;

    if(task === 'newtask') {
      this.setState({ day: this.getDay() });
      return;
    }

    getTask(task)
      .then(task => this.setState({ ...task}));
  }

  getDay() {
    return this.props.location.search.replace(/\D+/, '') || '';
  }

  updateTask = (event) => {
    const { task } = this.props.match.params;
    const promise = task === 'newtask' ? createTask(this.state) : updateTask(this.state);

    event.preventDefault();

    promise
      .then(() => this.props.history.push('/tasks'));
  };

   render() {
    const days = ['Sun', 'Mon', 'Thur', 'Wed', 'Th', 'Fr', 'St'];
    return (
      <form className="form-task" onSubmit={this.updateTask}>
        <p className="form-task__title">Day: <strong>{days[this.state.day]}</strong></p>
        <input
          className="form-task__field"
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <br/>
        <textarea
          className="form-task__field"
          value={this.state.description}
          name="description"
          onChange={this.onChange}
        >
          {this.state.description}
          </textarea>
        <br/>
        <button className="form-task__btn">Save</button>
      </form>
    )
  }
}