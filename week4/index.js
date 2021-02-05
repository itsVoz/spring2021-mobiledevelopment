// Import Sidebar class from Sidebar.js
import Sidebar from './components/Sidebar.js';

// new Sidebar 's' is created
// consists of an prop called menu that has an array with objects within
const s = new Sidebar({
  menu: [
    'Albert Eggstein',
    'Attila the Hen',
    'Attila the Hen',
    'Dixie Chick',
    'Gregory Peck',
    'Mary Poopins'
  ]
});

// Renders 's' within the console 
console.log(s.render());
