export class Counter extends React.Component {
  state = {
    // counter: 0
    users: []
  };


  getUsers = (event) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ users: users.sort((prev, next) => prev.name > next.name)}));
    // this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    // this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    // this.setState({ counter: this.state.counter + 1});
  };
  render() {
    return (
      <div className="counter">
        {/*<button onClick={() => this.clickHandler()}>Inc</button> <span>{this.counter}</span>*/}
        {/*<button onClick={this.clickHandler.bind(this)}>Inc</button> <span>{this.counter}</span>*/}
        {/*<button onClick={this.clickHandler}>Inc</button> <span>{this.state.counter}</span>*/}
        <button onClick={this.getUsers}>Get users</button>
        {
          this.state.users.length > 0 ?
          <ul>
            { this.state.users.map(user => <li key={user.id}>{user.name}</li>)}
          </ul> : <span>Empty users</span>
        }
      </div>
    );
  }
}