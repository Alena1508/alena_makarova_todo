import './userList.scss';

export class UserList extends React.Component {
  state = {
    tasks: [],
    loadedTasks: [],
    completed: false,
    value: ''
  };

  componentWillMount() {
    this.getTasks();
  };

  getTasks = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(data => data.json())
      .then(loadedTasks => this.setState({
        tasks: loadedTasks,
        loadedTasks
      }));
  };

  findTasks = (e) => {
    const value = e.target.value;
    this.setState({
      value,
      tasks: this.state.loadedTasks.filter((task) => {
        return task.title.includes(value);
      })
    });
  };

  removeTask = (index) => {
    this.state.tasks.splice(index, 1);
    this.setState({tasks: this.state.tasks});
  };

  doneTask = (index) => {
    let tasks = this.state.tasks;
    let currentTask = tasks[index];
    currentTask.completed = !currentTask.completed;
    this.setState({tasks});
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
                this.state.tasks.map((task, index) =>
                  <li
                    key={task.id}
                  >
                    <span
                      className={`task-name ${task.completed ? 'completed' : null}`}
                    >
                      {task.title}
                      </span>
                    <span
                      className="status delete"
                      onClick={() => this.removeTask(index)}
                    >X</span>
                    <span
                      className="status done"
                      onClick={() => this.doneTask(index)}
                    >V</span>
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