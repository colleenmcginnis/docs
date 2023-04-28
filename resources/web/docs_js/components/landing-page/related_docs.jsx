import { h, Component } from "../../../../../../node_modules/preact";
import { connect } from "../../../../../../node_modules/preact-redux";
import relatedDocs from "../../data/observability/related-docs.js"

export const RelatedDocs = props => {
  return (
    <div id="related-docs-container" className="row">
      {
        relatedDocs.map(doc => {
          return (
            <div className="col col-12 col-md-6 col-lg-4 use-case-item">
              <div className="card-contents">
                <div style={{ margin: "10px 0" }}><span style={{ textAlign: "center", display: "inline-block", height: "32px", width: "32px" }} class={`icon-${doc.icon}`}></span></div>
                <p className="card-title">{doc.title}</p>
                <p className="card-description">{doc.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default connect()(RelatedDocs);