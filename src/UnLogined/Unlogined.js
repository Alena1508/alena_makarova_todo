import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import {Registration} from '../pages/Registration/Registration';
import { ThankyouPage } from '../pages/ThankyouPage';

export class Unlogined extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          path="/login"
          render={() => <Login onLogin={this.props.onLogin} />}
        />
        <Route
          path="/registration"
          component={Registration}
        />
        <Route
          path="/thankYouPage"
          component={ThankyouPage}
        />
        <Redirect to="/login" />
      </Switch>
    )
  }
}