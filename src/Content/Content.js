import './content.scss';


import {Form} from '../Form';
import {Field} from './Field';
import { UserList } from '../UserList';


export const Content = () => (
  <div className="content">
    <Form excluded={['email']} disabled={['first name']} />
    <br />
    <br />
    <br />
    <Field />
    <UserList />
  </div>
);
