import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from "../Login";

export class Unlogined extends React.Component {
  render() {
    return(
      <Switch>
        <Route
          path="/login"
          render={() => <Login onLogin={this.props.onLogin} />}
        />
        <Redirect to="/login" />
      </Switch>
    )
  }
}