import FriendlistItem from './FriendListItem.jsx';
import css from "./Friendlist.module.css"

export default function Friendlist({ friends }) {
  return (
    <ul className={css.cardfriendlist}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <FriendlistItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}
