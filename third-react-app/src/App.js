import logo from './logo.svg';
import './App.css';

import ContactProvider from './Components/ContactContext';
import AddNewContact from './Components/AddNewContact';
import ContactList from './Components/ContactList';
import ContactFilter from './Components/ContactFilter';

function App() {
  return (
    <div className="App">
      
      <ContactProvider>
        <AddNewContact/>
        <ContactList/>
        <ContactFilter/>
      </ContactProvider>

    </div>
  );
}

export default App;
