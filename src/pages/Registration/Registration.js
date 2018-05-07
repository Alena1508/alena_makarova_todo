
import './registration.scss';
import { Loader, Form } from '../../components';
import { registration } from '../../services/users';


export class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }


  submit = (fields) => {
    this.setState({ loading: true });


    registration(fields)
      .then(this.props.history.push('/thankYouPage'))
      .catch(err => console.log('Can\'t login', err));

  };


  render() {
    const { loading } = this.state;
    return (
      loading ? <Loader /> :
          <Form onSubmit={fields => this.submit(fields)} />
    );
  }
};