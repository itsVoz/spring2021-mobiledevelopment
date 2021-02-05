// Imports Component class from Component.js
import Component from './Component.js';

// new Sidebar class extends the exisitng Compontent class from Compontent.js
class Sidebar extends Component {

  // Accepts props as a parameter
  constructor (props) {
    super(props);
  }

  render () {
   
    // sets responseHTML to have an empty string
    let responseHTML = '';

    // Referncing this.props.menu within index.js
    // forEach will loop through the items within the menu array
    // => is a function expression 
    this.props.menu.forEach( (item) => {
      
      // Concatenate items found
      // For every item found, <li></li> will be wrapped around that item
      responseHTML = responseHTML.concat(`<li>${item}</li>`);
    });

    // Wrap all information displayed in responseHTML in <ul> </ul>
    responseHTML = '<ul>' + responseHTML + '</ul>';

    //returns the final string
    return responseHTML;
  }
}

// Export Sidebar so index.js can import the class
export default Sidebar;
