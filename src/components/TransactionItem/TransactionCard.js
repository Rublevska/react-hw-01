import { Line, Column } from './TransactionCard.styled';
export const TransactionString = ({ item: { id, type, amount, currency } }) => (
  <Line key={id}>
    <td>{type}</td>
    <Column>{amount}</Column>
    <td>{currency}</td>
  </Line>
);
