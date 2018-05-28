import { connect } from 'react-redux';

import { updateUserAsync } from '../../store';
import { Loader, Form } from '../../components';

export class ChangeUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }


  submit = (fields) => {
    this.setState({ loading: true });


    this.props.dispatch(updateUserAsync(fields));
    this.props.history.push('/');
  };


  render() {
    const { loading } = this.state;
    const { email, firstName, lastName } = this.props.user;
    return (
      loading ? <Loader /> :
      <Form
        data={{
          email,
          firstName,
          lastName
        }}
        disabled={['email']}
        skipped={['password', 'repeatPassword']}
        onSubmit={this.submit}
      />
    );
  }
}

const mapStoreToProps = ({ user }) => ({
  user
});

export const ChangeUser = connect(mapStoreToProps)(ChangeUserContainer);
