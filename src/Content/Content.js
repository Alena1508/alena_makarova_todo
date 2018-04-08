import './content.scss';


import {Form} from '../Form'
import {Field} from "./Field";


export const Content = () => (
  <div className="content">
    <Form excluded={['email']} disabled={['first name']}/>
    <br />
    <br />
    <br />
    <Field />
  </div>
);
