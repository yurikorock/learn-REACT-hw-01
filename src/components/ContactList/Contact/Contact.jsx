import css from './Contact.module.css';
import { PiAlienBold } from 'react-icons/pi';
import { PiPhoneTransferFill } from 'react-icons/pi';

export default function Contact({ id, name, number }) {
  return (
    <div className={css.contactCard}>
      <div className={css.infogroup}>
        <div className={css.info}>
          <PiAlienBold className={css.icon}/>
          <p>{name}</p>
        </div>
        <div className={css.info}>
          <PiPhoneTransferFill className={css.icon}/> <p>{number}</p>
        </div>
      </div>

      <button className={css.button}>Delete</button>
    </div>
  );
}
