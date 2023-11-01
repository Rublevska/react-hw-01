import { TransactionString } from 'components/TransactionItem/TransactionCard';
import { TransactionTable, Header, Column } from './TransactionHistory.styled';

export const TransactionList = ({ items }) => (
  <TransactionTable>
    <Header>
      <tr>
        <Column>Type</Column>
        <Column>Amount</Column>
        <Column>Currency</Column>
      </tr>
    </Header>

    <tbody>
      {items.map(item => (
        <TransactionString item={item} />
      ))}
    </tbody>
  </TransactionTable>
);
