import './tabs.scss'
import { TabNav } from './TabNav';
import { TabContent } from './TabContent';
import PropTypes from 'prop-types';

export class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      id: 0
    };
  }

  componentDidMount() {
    this.clickTab(this.state.id);
  };

  clickTab = (id) => {
    this.setState({
      content: this.props.tabs[id].content,
      id
    });
  }
  render() {
    return (
      <section className="tab">
        <TabNav
          list={
            this.props.tabs.map(({ id, title }) => ({ id, title }))
          }
          select={this.clickTab} />
        <TabContent content={this.state.content} />
      </section>
    );  }
}

Tabs.propTypes = {
  tabs: PropTypes.array
};
Tabs.defaultProps = {
  tabs: []
};