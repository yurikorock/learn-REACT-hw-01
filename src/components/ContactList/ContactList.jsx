import Contact from './Contact/Contact.jsx';
import css from "./ContactList.module.css"

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact id={id} name={name} number={number} onDelete={onDelete} />
        </li>
      ))}
    </div>
  );
}
