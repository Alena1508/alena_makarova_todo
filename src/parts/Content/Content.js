import './content.scss';

// import { Counter } from './Counter';
import {Form} from '../../components'
// import {Timer} from "../../Timer";
import {Tabs, Tab} from "../../components";
// import {TaskList} from "../../pages";
import {Redirect} from "react-router-dom";

const tabs = [
  {id: 0, title: 'Tab 1', content: 'Some text is here'},
  {id: 1, title: 'Tab 2', content: 'Another content'},
  {id: 2, title: 'Tab 3', content: 'Third text'}
];

export class Content extends React.Component {
  state = {
    tasks: false
  }

  render()
  {
    return (
      <div className="content">
        <Form excluded={['email']} disabled={['first name']}/>
        {/*<TaskList/>*/}
        <Tabs>
          <Tab title="Tab 1">
            <h1>Title</h1>
            <article>Lorem ipsum</article>
          </Tab>
          <Tab title="Tab 2">
            <h1>Titlegf2</h1>
            <article>Lorem ipsum</article>
          </Tab>
        </Tabs>
        <button onClick={() => this.setState({ tasks: true })}>Back</button>
        {this.state.tasks && <Redirect to="/tasks" />}
      </div>
    )
  }
};
