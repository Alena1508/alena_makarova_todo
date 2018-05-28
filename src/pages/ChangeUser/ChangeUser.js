import { connect } from 'react-redux';

import { updateUser as updateUserStore, updateUserAsync } from '../../store';
// import { updateUser } from '../../services';
import { Loader, Form } from '../../components';

export class ChangeUserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }


  // submit = (fields) => {
  //   this.setState({ loading: true });
  //
  //
  //   this.dispatch(updateUserAsync(fields)
  //     .then(() => this.props.dispatch(updateUserStore(fields)))
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log('Can\'t login', err)));
  // };


  render() {
    const { loading } = this.state;
    return (
      loading ? <Loader /> :
      <Form
        data={this.props.user}
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
