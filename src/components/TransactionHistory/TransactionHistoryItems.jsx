export default function TransactionHistoryItems({ items }) {
  return (
    <tbody>
      {items.map(({id, type, amount, currency}) => (
        <tr key={id}>
          <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  );
}
