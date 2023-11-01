import { FriendCard, Status } from './FriendItem.styled';
export const FrendItem = ({ friendItem: { avatar, name, isOnline, id } }) => {
  return (
    <FriendCard key={id}>
      <Status $isOnline={isOnline}></Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </FriendCard>
  );
};
