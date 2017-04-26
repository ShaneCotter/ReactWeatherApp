import React, {Component, PropTypes} from 'react';
import places from '../constants/Places';

class PlacesNav extends Component {

  propTypes: {
    onClick: PropTypes.func.isRequired
  }

/*Method to Iterate through Places in for loop*/
  renderPlaces(onClick){
    var elems = [];
    for (var index in places){
      const {text,value} = places[index];

      elems.push(
        <h2 onClick={() => onClick(value)}>{text}</h2>
      );
    }

    return elems;
  }/*end of renderPlaces*/

  render(){
    return(

      <div className="places-nav">
      {this.renderPlaces(this.props.onClick)}
      </div>

    );
  }
}

export default PlacesNav;
