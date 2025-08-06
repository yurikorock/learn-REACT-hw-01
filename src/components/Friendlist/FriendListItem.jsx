import css from './FriendlistItem.module.css';
import clsx from 'clsx';

export default function FriendlistItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendlistitem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendname}>{name}</p>
      <p
        className={clsx(
          css.status,
          isOnline ? css.online :css.offline,
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
