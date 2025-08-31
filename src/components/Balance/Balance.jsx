import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from '../../redux/store.js';

export default function Balance() {
  const dispatch = useDispatch(); //все що він робить - повертає посилання на функцію відправки екшенів
  const balance = useSelector((state) => {
    return state.balance.value;
  });

  const handleDeposit = () => {
    // console.log(deposit(15));
    // const action = deposit(5);
    // dispatch(action); // далі скорочено =>
    dispatch(deposit(5)); // викликається фунція, повертає обєкт екшену, потім викликається діспатч і відправляє цей обєкт
  };

  const handleWithdraw = () => {
    dispatch(withdraw(10));
  };

  return (
    <div>
      <p>Balance: {balance} credits</p>
      {/* <input type="number"/> */}
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
