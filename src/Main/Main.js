import { Aside } from '../Aside';
import { Content } from '../Content';


import './main.scss';


const Error = ({ text, color }) => {
  const styles = { color };
  return <mark style={styles}>{ text || 'Some default text' }</mark>;
};


const List = ({ list, field, ordered }) => {
  const items = (list || [])
    .map(el => <li key={el.id}>{ el[field || 'name'] }</li>);
  return ordered ? <ul>{items}</ul> : <ol>{ items }</ol>;
};
const users = [
  { id: 123, title: 'Patrik' },
  { id: 46, title: 'Teresa' },
  { id: 78, title: 'John' }
];


export const Main = () => (
  <React.Fragment>
    <List
      list={users}
      field="title"
    />
    <Error
      text="some text"
      color="red"
    />
    <main className="main">
      <Aside />
      <Content />
    </main>
  </React.Fragment>
);
