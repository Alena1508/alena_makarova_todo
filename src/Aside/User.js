export class User extends React.Component {
  state = {
    userName: 'Alena',
    tasks: 10,
    done: 3,
    progress: 1,
    waiting: 5
  };

  render() {
    return (
      <div className="user-info">
        <h2>{`Hello ${this.state.userName}`}</h2>
        <p>{`You have ${this.state.tasks} tasks`}</p>
        <p>{`Done: ${this.state.done} `}</p>
        <p>{`In progress: ${this.state.progress} `}</p>
        <p>{`Waiting: ${this.state.waiting} `}</p>
        <a href="/list">Go to the task list</a>
      </div>
    );
  }
}
