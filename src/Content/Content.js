import './content.scss';

// import { Counter } from './Counter';
import {Form} from '../Form'
import {Timer} from "../Timer";


export class Content extends React.Component {

  render() {
    return (
      <div className="content">
        <Form />
        <Timer/>
      </div>
    )
  }
};
