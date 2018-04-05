// export class Timer extends React.Component {
//   state = {
//     time: ''
//   };
//
//   constructor(props) {
//     super(props);
//     console.log('lala');
//   }
//
//   componentDidMount() {
//     setInterval(this.createTimer, 1000);
//   }
//
//   componentWillUnmount() {
//     console.log('unmount');
//     clearInterval(this.createTimer());
//   }
//
//   createTimer = () => {
//     let dateNow = new Date();
//     console.log(dateNow);
//     let time = `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`;
//     this.setState({
//       time
//     });
//   };
//
//
//
//
//   render() {
//     const {time} = this.state;
//     return (
//       <div>
//         <h2>Hello, user!</h2>
//         <time>{time}</time>
//       </div>
//     )
//   }
// };
//
