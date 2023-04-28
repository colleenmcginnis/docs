import { h, Component } from "../../../../../../node_modules/preact";
import { connect } from "../../../../../../node_modules/preact-redux";
import introContent from "../../data/observability/intro-content.js"

export const Intro = props => {
  return (
    <div class="row">
      <div id="intro-text" class="col-md-6">
        <p>{introContent.description}</p>
        <ul>
          {introContent.features.map(feature => <li>{feature}</li>)}
        </ul>
      </div>
      <div className="col-md-6 intro-image" />
    </div>
  )
}

export default connect()(Intro);