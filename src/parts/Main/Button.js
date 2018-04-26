export class Buttons extends React.Component {
  state = {
    isActive: false
  };

  toggleClass = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <div className="button-container">
        <button
          className={this.state.isActive ? 'active' : ''}
          onClick={this.toggleClass}
        >
          {this.state.isActive ? 'Hide' : 'Show'}
        </button>
        {
          this.state.isActive && <div className="button-text">Hello, React!</div>
        }
      </div>
    );
  }
}
