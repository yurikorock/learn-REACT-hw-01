import TransactionHistoryItems from "./TransactionHistoryItems.jsx";

export default function TransactionHistory({items}){
    return(
        <table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <TransactionHistoryItems items={items}/>
  </table>
    );
}