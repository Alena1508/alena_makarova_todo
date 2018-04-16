export class Form extends React.Component {
  state = {
    name: 'Alena',
    age: undefined,
    role: undefined,
    mail: false
  };

  users = ['Admin', 'User', 'Guest'];

  changeInput = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({ [target.name]: target.checked });
      return;
    }

  };

  render() {
    const { name, age, role, mail } = this.state;
    const code = name.split('').reduce((prev, next) => prev + next.charCodeAt(), '');

    return (
      <form action="#">
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.changeInput}
        />

        <input
          name="age"
          type="number"
          value={age}
          onChange={this.changeInput}
        />
        <br/>

        <select
          name={role}
          value={role}
          onChange={this.changeInput}
        >
          {this.users.map(user =>
            <option
              value={user}
              key={user}
            >
              {user}
              </option>)}
        </select>
        <br/>
        <label htmlFor="">
          <input type="checkbox"
          name="mail"
          checked={mail}
                 onChange={this.changeInput}
          />
          Shoul be mailed
        </label>
        <p>{code}</p>
      </form>
    )
  }
}