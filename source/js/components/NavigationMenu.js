'user strict';

import React, {Component} from 'react';
import {Link} from 'react-router';

class NavigationMenu extends Component{
  constructor(props){
    super(props);
  }

  goBack(evt){
    evt.preventDefault();
    evt.stopPropagation();
    window.history.back();
  }

  render(){
    const self = this;

    let searchLink;
    if(self.props.pathname === '/place'){
      searchLink = (
        <Link to="/map">
          <i className="bu-btn-map fa fa-2x fa-globe"></i>
        </Link>
      );
    }else{
      searchLink = (
        <Link to="/place">
          <i className="bu-btn-map fa fa-2x fa-bars"></i>
        </Link>
      );
    }
    return (
      <nav className="bu-nav-menu">
        <ul>
          <li>
            <a href="#" onClick={self.goBack}>
              <i className="bu-btn-settings fa fa-2x fa-arrow-circle-o-left"></i>
            </a>
          </li>
          <li>
            <Link to="/settings">
              <i className="bu-btn-settings fa fa-2x fa-cog"></i>
            </Link>
          </li>
          <li>
            {searchLink}
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavigationMenu;
