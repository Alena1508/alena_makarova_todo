import { Route, Switch, Redirect } from 'react-router-dom';
import { Task } from '../pages/Task';
import { NotFound } from '../pages/NotFound';
// import { TaskList } from '../pages/TaskList';
import { Main } from '../parts';
import { ChangeUser } from '../pages/ChangeUser/ChangeUser';
import { Async } from '../components';

export class Logined extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={Main}
        />
        <Route
          path="/tasks"
          exact
          render={() => <Async name="TaskList" path="pages/TaskList" />}
        />
        <Route
          path="/tasks/:task"
          exact
          component={Task}
        />
        <Route
          path="/change-user"
          exact
          component={ChangeUser}
        />
        <Redirect from="/login" to="/" />
        <Route
          path="*"
          component={NotFound}
        />
      </Switch>
    );
  }
}
