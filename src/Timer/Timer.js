export class Timer extends React.Component {
  state = {
    time: ''
  };


  componentDidMount() {
    setInterval(this.createTimer, 1000);
  }

  componentWillUnmount() {
    console.log('unmount');
    clearInterval(this.state.time);
  }

  createTimer = () => {
    let dateNow = new Date();
    let time = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
    this.setState({
      time
    });
  };




  render() {
    const {time} = this.state;
    return (
      <div>
        <h2>Hello, user!</h2>
        <time>{time}</time>
      </div>
    )
  }
};

