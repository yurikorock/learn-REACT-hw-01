import './App.css';
import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(()=>{
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts): [];
  }
   
  );
  const [search, setSearch] = useState('');

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );
  const addContact = (newContact) => {
    setContacts((prewContacts) => [...prewContacts, newContact]);
  };
  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} />
    </>
  );
}

export default App;
