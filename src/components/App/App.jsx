import './App.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';


function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
