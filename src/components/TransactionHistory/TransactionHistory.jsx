import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  function capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
  }

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>Type</th>
          <th className={s.th}>Amount</th>
          <th className={s.th}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return (
            <tr className={s.tr} key={item.id}>
              <td className={s.td}>{capitalizeFirstLetter(item.type)}</td>
              <td className={s.td}>{item.amount}</td>
              <td className={s.td}>{capitalizeFirstLetter(item.currency)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
