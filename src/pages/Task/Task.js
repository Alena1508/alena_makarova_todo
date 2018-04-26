export class Task extends React.Component {
  constructor(props) {
    super(props);



    this.state = Object.assign({}, props.location.state.task);
  }

  onChange = (event) => {
    const { target } = event;

    this.setState({ [target.name]: target.value })
  };

   render() {
    const days = ['Sun', 'Mon', 'Thur', 'Wed', 'Th', 'Fr', 'St'];
    return (
      <form>
        <p>Day: {days[this.state.day]}</p>
        <input
          type="text"
          value={this.state.title}
          onChange={this.onChange}
          required
        />
        <br/>
        <textarea>{this.state.description}</textarea>
        <br/>
        <button>Save</button>
      </form>
    )
  }
}