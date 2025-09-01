import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from '../../redux/balanceSlice.js';
import { useState } from 'react';

export default function Balance() {
  const dispatch = useDispatch(); //все що він робить - повертає посилання на функцію відправки екшенів
  //отримуємо дані із стор, по суті отримуємо даний стан в компонент
  const balance = useSelector((state) => {
    return state.balance.value;
  });

  const handleDeposit = () => {
    // console.log(deposit(15));
    // const action = deposit(5);
    // dispatch(action); // далі скорочено =>
    dispatch(deposit(value)); // викликається фунція, повертає обєкт екшену, потім викликається діспатч і відправляє цей обєкт в стор
  };

  const handleWithdraw = () => {
    dispatch(withdraw(value));
  };

  //локальний стан input немає сенсу використовувати Redux
  const [value, setValue] = useState(0);
  const handleChangeValue = (e) =>{
    setValue(Number(e.target.value));
  }

  return (
    <div>
      <p>Balance: {balance} credits</p>
      <input type="number" value={value} onChange={handleChangeValue} />
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
