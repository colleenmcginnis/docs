import { h, Component } from "../../../../../../node_modules/preact";
import { connect } from "../../../../../../node_modules/preact-redux";
import { tabData } from "../../data/tab-data.js"

const buildCards = (data) => {
  const cards = data.items.map((item, i) => {
    const image = <div className={`card-image ${item.image ? `image-${item.image}` : "placeholder"}`}></div>
    const cardExternalLink = <p className="card-link">{item.book ? `Go to ${item.book} -->` : "Read the docs"}</p>
    return (
      <div className="col col-4">
        <a href={item.link}>
          <div className="card-contents">
            {image}
            <p className="card-title">{item.title}</p>
            <p className="card-description">{item.description}</p>
            {cardExternalLink}
          </div>
        </a>
      </div>
    )
  })
  return cards
}

class TabbedOverview extends Component {
  constructor(props) {
    super(props);
    const data = tabData["Observability"]
    this.state = { activeTab: Object.keys(data)[0] };
    this.clickTab = this.clickTab.bind(this);
  }

  clickTab(id) {
    const tab = id.split('-tab')[0]
    this.setState({ activeTab: tab });
  }

  render() {
    const data = tabData["Observability"]
    return (
      <div id="capability-tabs-container">
        <div id="button-container">
          {Object.values(data).map((tab, i) => {
            return (
              <div
                id={`${Object.keys(data)[i]}-tab`}
                classList={`tab-button${ Object.keys(data)[i] === this.state.activeTab ? ' active' : ''}`}
                onClick={(e) => this.clickTab(e.target.id)}
              >
                <span style={{ pointerEvents: "none" }} className={`app-icon icon-${tab.icon}`}></span>
                {tab.title}
              </div>
            )
          })}
        </div>
        <div id="card-container" className="row">
          {buildCards(data[this.state.activeTab])}
        </div>
      </div>
    )
  }
}

export default connect()(TabbedOverview);
