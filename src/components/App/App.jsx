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
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const deleteContact = (contactId) => {
    setContacts((prevContacts)=>{
      return prevContacts.filter((cont)=>cont.id !== contactId);
    });
  };

  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={filterContacts} onDelete={deleteContact}/>
    </>
  );
}

export default App;
