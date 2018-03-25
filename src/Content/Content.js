import './content.scss';


const Greeting = ({ name }) => {
  const hour = new Date().getHours();
  let partDay = '';
  if (hour > 22.00 && hour < 3.00) {
    partDay = 'night';
  } else if (hour > 3.00 && hour < 12.00) {
    partDay = 'morning';
  } else if (hour > 12.00 && hour < 18.00) {
    partDay = 'afternoon';
  } else if (hour > 18.00 && hour < 22.00) {
    partDay = 'evening';
  }
  return <p>Good { partDay }, { name }!</p>;
};

const Number = ({
  from, to, odd, even
}) => {
  const num = [];
  for (let i = from; i < to; i++) {
    if (odd) {
      if ((i % 2) === 0) {
        num.push(<li>{ i }</li>);
      }
    } else if (even) {
      if (!((i % 2) === 0)) {
        num.push(<li>{ i }</li>);
      }
    } else {
      num.push(<li>{ i }</li>);
    }
  }
  return <ul>{ num }</ul>;
};

const users = [
  { firstName: 'Alena', lastName: 'Makarova', age: 24 },
  { firstName: 'Andrey', lastName: 'Makarov', age: 25 },
  { firstName: 'Eva', lastName: 'Makarova', age: 15 }
];

const User = ({ user }) => <div> {user.firstName } { user.lastName } { user.age }</div>;

const UsersList = () => {
  const list = users.map(user => <li><User user={user} /></li>);
  return <ul>{ list }</ul>;
};

const Time = () => <time>{ new Date().toTimeString() }</time>;
export const Content = () => (
  <div className="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
    </p>
    <Time />
    <Greeting name="Alena" />
    <Number from={5} to={10} odd />
    <UsersList users="users" />
  </div>
);
