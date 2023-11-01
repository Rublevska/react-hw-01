import { UserRangs } from '../UserRangs/UserRangs';
import {
  CardWrapper,
  Info,
  Avatar,
  Username,
  Userinfo,
} from './Profile.styled';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <CardWrapper>
      <Info>
        <Avatar src={avatar} alt={username} />

        <Username>{username}</Username>
        <Userinfo>{tag}</Userinfo>
        <Userinfo>{location}</Userinfo>
      </Info>

      <UserRangs stats={stats} />
    </CardWrapper>
  );
};
