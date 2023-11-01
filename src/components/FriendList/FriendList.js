import { FrendItem } from 'components/FriendItem/FriendItem';
import { FriendsListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => (
  <FriendsListStyle>
    {friends.map(friend => (
      <FrendItem friendItem={friend} key={friend.id} />
    ))}
  </FriendsListStyle>
);
