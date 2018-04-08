export class Field extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false,
      text: 'Click and enter your name!'
    };

  }


  toggleClass = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  handleChange = (e) => {
    this.setState({text: e.target.value});
  };



  render() {
    return (
      <div className="field-wrapper">
        {
          this.state.isHidden ?
            <input
            type="text"
            onChange={(e) => this.handleChange(e)}
            onBlur={this.toggleClass}
            value={this.state.text}
          /> : <span onClick={this.toggleClass}>{ this.state.text }</span>
        }
      </div>
    )
  }
}