import React from "react";

import { Link } from "react-router";

export default class Info extends React.Component {
  constructor(props) {
    super();

  }



  render() {
    const disclaimer = location.pathname.match(/^\/disclaimer/) ? "active" : "";
    const linkStyle = { textDecoration: 'none'};
    const infoBtn = 'infoBox';

      return (
        <div>
          <Link to="disclaimer" style={linkStyle}>
          <button className={disclaimer} id="howItWorks" className="infoBox" type="button">
            <ul className="infoUl">
              <li className="infoText">H</li>
              <li className="infoText">O</li>
              <li className="infoText">W</li>
            </ul>
            <ul className="infoUl">
              <li className="infoText">I</li>
              <li className="infoText">T</li>
            </ul>
            <ul className="infoUl">
              <li className="infoText">W</li>
              <li className="infoText">O</li>
              <li className="infoText">R</li>
              <li className="infoText">K</li>
              <li className="infoText">S</li>
            </ul>

          </button>
            </Link>

        </div>
      );
  }


}

