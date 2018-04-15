import './userList.scss';

export class UserList extends React.Component {
  state = {
    tasks: [],
    completed: false,
    value: ''
  };

  componentWillMount() {
    this.getTasks();
  };

  getTasks = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(data => data.json())
      .then(tasks => this.setState({tasks}));
  };


  findTasks = (e) => {
    const value = e.target.value.toLowerCase();

    this.setState({value});
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(data => data.json())
      .then(tasks => this.setState({ tasks: tasks.filter((task) => {
        return task.title.toLowerCase().includes(value);
        }) }));
  };


  render() {
    return (
      <div className="tasks-container">
        <input
          type='text'
          placeholder='Enter first letter'
          value={this.state.value}
          onChange={this.findTasks}
        />
        {
          this.state.tasks.length > 0 ?
            <ul className="task-list">
              {
                this.state.tasks.map(task =>
                  <li
                    key={task.id}
                  >
                    <span
                      className={task.completed ? 'completed task-name' : 'task-name'}
                    >
                      {task.title}
                      </span>
                    <span className="status delete">X</span>
                    <span className="status done">V</span>
                    <span className="status in-progress">~</span>
                  </li>
                )
              }
            </ul> : null
        }
      </div>
    )
  }
}