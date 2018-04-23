import { BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';

import { App } from './app.component';

const Root = (
  <Router>
    <App />
  </Router>
);
ReactDom.render(Root, document.getElementById('app'));
