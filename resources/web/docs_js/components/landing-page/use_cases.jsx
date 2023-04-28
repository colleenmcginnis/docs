import { h, Component } from "../../../../../../node_modules/preact";
import {connect} from "../../../../../../node_modules/preact-redux";
import useCases from "../../data/observability/use-cases.js"

export const UseCases = props => {
  return (
    <div id="use-case-container" className="row">
      {
        useCases.map(useCase => {
          return (
            <div className="col col-12 col-lg-6 use-case-item">
              <div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
              <div>
                <ul>
                  {useCase.docs.map(doc => {
                    return (
                      <li style={{ paddingBottom: "15px" }}>
                        <span>
                          <a style={{ fontWeight: "600" }} href={doc.url}>{doc.linkText}</a>
                          <br />
                          {doc.description}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default connect()(UseCases);
