import { Route, Switch, Redirect } from 'react-router-dom';
import { Task } from "../pages/Task";
import {NotFound} from "../parts/NotFound";
import { TaskList } from "../pages/TaskList";
import { Main } from "../parts";

export class Logined extends React.Component {
  render() {
    return(
        <Switch>
          <Route
            path="/"
            exact
            component={Main}
          />
          <Route
            path="/tasks"
            exact
            component={TaskList}
          />
          <Route
            path="/tasks/:task"
            exact
            component={Task}
          />
          <Redirect from="/login" to="/" />
          <Route
            path="*"
            component={NotFound}
          />
          <Route render={({location}) => <h1>Page <em> {location.pathname.replace('/', '')}</em> is not exist</h1>}
          />
        </Switch>
      )
  }
}