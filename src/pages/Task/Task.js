import { getTask, updateTask, createTask } from '../../services';

export class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      is: null
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
      .then(task => this.setState({ ...task}))
  }

  getDay() {
    return this.props.location.search.replace(/\D+/, '') || '';
  }

  updateTask = (event) => {
    const { task } = this.props.match.params;
    let promise = task === 'newtask' ? createTask(this.state) : updateTask(this.state);

    event.preventDefault();

    if(task ==='newtask') {
      createTask(this.state)
        .then(console.log);
      return;
    }


    promise
      .then(() => this.props.history.push('/tasks'));
  };

   render() {
    const days = ['Sun', 'Mon', 'Thur', 'Wed', 'Th', 'Fr', 'St'];
    return (
      <form onSubmit={this.updateTask}>
        <p>Day: {days[this.state.day]}</p>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <br/>
        <textarea
          value={this.state.description}
          name="description"
          onChange={this.onChange}
        >
          {this.state.description}
          </textarea>
        <br/>
        <button>Save</button>
      </form>
    )
  }
}