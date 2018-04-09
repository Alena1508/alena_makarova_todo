import './content.scss';

// import { Counter } from './Counter';
import {Form} from '../Form'
import {Timer} from "../Timer";
import {Tabs} from "../Tabs";

const tabs = [
  {id: 0, title: 'Tab 1', content: 'Some text is here'},
  {id: 1, title: 'Tab 2', content: 'Another content'},
  {id: 2, title: 'Tab 3', content: 'Third text'}
];

export const Content = () => (
  <div className="content">
    <Form excluded={['email']} disabled={['first name']}/>
    <Tabs tabs={tabs} />
  </div>
);
