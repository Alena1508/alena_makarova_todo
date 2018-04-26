import './tabs.scss'
import { TabNav } from './TabNav';
import { Tab } from './Tab';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex ? props.selectedIndex : 0
    };
  }

  clickTab = (index) => {
    this.setState({ selectedIndex: index  });
  };

  render() {
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title);
    const contents = tabs.map(tab => tab.props.children);
    return (
      <section className="tab">
        <TabNav
          list={links}
          active={this.state.selectedIndex}
          select={this.clickTab} />
        <div>
          {contents[this.state.selectedIndex]}
        </div>
      </section>
    );  }
}

// Tabs.propTypes = {
//   tabs: PropTypes.array
// };
// Tabs.defaultProps = {
//   tabs: []
// };