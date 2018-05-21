import './tabs.scss'
import { TabNav } from './TabNav';
import { Tab } from './Tab';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: props.selectedIndex ? props.selectedIndex : 0
    };
  }

  clickTab = (selectedIndex) => {
    this.setState({ selectedIndex });
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
          select={this.clickTab}
        />
        <div className="tab-content">
          {contents[this.state.selectedIndex]}
        </div>
      </section>
    );  }
}

