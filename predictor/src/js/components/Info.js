import React from "react";

export default class Info extends React.Component {
  constructor(props) {
    super()
    this.state = {
      collapsed: true,
    };

  }

  render() {
    const { collapsed } = this.state;

    return (
      <div>
        <div className="row">
          <nav className="navbar navbar-vertical-left">
            <ul class="nav navbar-nav">

    <li>
      <a href>
        <i class="fa fa-fw fa-lg fa-star"></i>
        <span><a href="http://www.jqueryscript.net/menu/">Menu</a> 1</span>
      </a>
    </li>
    <li>
      <a href>
        <i class="fa fa-fw fa-lg fa-font"></i>
        <span>Menu 2</span>
      </a>
    </li>
    <li>
      <a href>
        <i class="fa fa-fw fa-lg fa-rocket"></i>      <span>Menu 3</span>
      </a>
    </li>
    <li>
      <a href>
        <i class="fa fa-fw fa-lg fa-cog"></i>
        <span>Menu 4</span>
      </a>
    </li>
  </ul>

          </nav>
        </div>
      </div>
    );
  }
}

// <div id="howItWorks" className="infoBox">
//               <ul className="infoUl">
//                 <li className="infoText">H</li>
//                 <li className="infoText">O</li>
//                 <li className="infoText">W</li>
//               </ul>
//               <ul className="infoUl">
//                 <li className="infoText">I</li>
//                 <li className="infoText">T</li>
//               </ul>
//               <ul className="infoUl">
//                 <li className="infoText">W</li>
//                 <li className="infoText">O</li>
//                 <li className="infoText">R</li>
//                 <li className="infoText">K</li>
//                 <li className="infoText">S</li>
//               </ul>
//             </div>
