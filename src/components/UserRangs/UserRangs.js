import { RangList, RangItem, RangTitle, RangInfo } from './UserRangs.styled';

export const UserRangs = ({ stats: { followers, views, likes } }) => {
  return (
    <RangList>
      <RangItem>
        <RangTitle>Followers </RangTitle>
        <RangInfo>{followers}</RangInfo>
      </RangItem>
      <RangItem>
        <RangTitle>Views </RangTitle>
        <RangInfo>{views}</RangInfo>
      </RangItem>
      <RangItem>
        <RangTitle>Likes </RangTitle>
        <RangInfo>{likes}</RangInfo>
      </RangItem>
    </RangList>
  );
};
