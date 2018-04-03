import './content.scss';

// import { Counter } from './Counter';
import {Form} from '../Form'
import {Timer} from "../Timer";


stopTimer = () => {

};
export const Content = () => (
  <div className="content">
    <Form/>
    <Timer/>
    <button onClick={stopTimer()}>Stop</button>
  </div>
);
