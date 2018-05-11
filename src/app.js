import { BrowserRouter as Router } from 'react-router-dom';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './app.component';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const MainApp = <Provider store={store}><Root/></Provider>;

ReactDom.render(MainApp, document.getElementById('app'));
