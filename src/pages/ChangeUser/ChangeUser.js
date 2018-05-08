import {updateUser} from '../../services';
import { Loader, Form } from '../../components';

export class ChangeUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.onLogin = this.props.onLogin;
    }


    submit = (fields) => {
        this.setState({ loading: true });


        updateUser(fields)
          .then(() => this.props.history.push('/'))
          .then((data) => this.onLogin(data))
          .catch(err => console.log('Can\'t login', err));

    };


    render() {
        const { loading } = this.state;
        return (
          loading ? <Loader /> :
            <Form
              onSubmit={fields => this.submit(fields)}
              disabled={['email']}
              skipped={['password', 'repeatPassword']}
            />
        );
    }
}