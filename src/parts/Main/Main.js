import { Aside } from '../../parts';
import { Content } from '../../parts';
import { Buttons } from './Button';


import './main.scss';

export class Main extends React.Component {
  state = {
    users: [],
    posts: [],
  };

  componentWillMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(users => this.setState({ users: users.sort((prev, next) => prev.name > next.name) }));
  };

  getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(data => data.json())
      .then(posts => this.setState({ posts }));
  };



  render() {
    return (
      <React.Fragment>
        <main className="main">
          <Aside user={this.props.user} />
          <Content />
          <div className="user">
            {
              this.state.users.length > 0 ?
                <ul className="user-list">
                  {this.state.users.map(user =>
                    <li
                      key={user.id}
                      onClick={() => this.getUserPosts(user.id)}
                    >
                      {user.name}
                    </li>)
                  }
                </ul> : <span>Empty users</span>
            }
            <div>
              {
                this.state.posts.length > 0 ?
                  <div className="posts">
                    <h2>Posts</h2>
                    <ul className="user-posts">
                      {
                        this.state.posts.map(post =>
                          <li
                            key={post.id}
                          >
                            {post.title}
                          </li>)
                      }
                    </ul>
                  </div>
                  : null
              }
            </div>
          </div>
          <Buttons />
        </main>
      </React.Fragment>
    );
  }
}
