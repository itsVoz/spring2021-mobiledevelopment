// Import Component
import Component from './Component.js';

// Article is a child object of Component
class Article extends Component {

  // Accpet the three different arguments; title, author, & text
  constructor (title, author, text) {
    // Send what it gets to its parent object
    super(title, author, text);
    }

  render () {

    // Return HTML with the title, author, and text of this article
    // Replaced literal code with actual code
    return `
      <Article>
        ${this.props.title}
        ${this.props.author}
        ${this.props.text}
      </Article>`; 
  }

}

export default Article;
