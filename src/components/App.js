import user from './data/user.json';
import data from './data/data.json';
import userFriends from './data/friends.json';
import transactions from './data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionList } from './Transactions/TransactionHistory';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={userFriends} />
      <TransactionList items={transactions} />
      <GlobalStyle />
    </div>
  );
};
