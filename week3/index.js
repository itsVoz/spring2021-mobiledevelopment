// Import Article
import Article from './Article.js';

// Pass the values to the constructor method of Article
// Creating a new constant of Article with assingned arguments
const a = new Article (
  {
    title: "This is the title!",
    author: "Matt Adams",
    text: "Huston, we have landed!"
  }
);

// Shows its HTML on the console
console.log(a.render() );

class ArticleTitle {

  constructor(title) {
    this.props = {};
    this.props.title = title;
  }

  render() {
    return `<h1>${this.props.title}</h1>`;
  }

}
