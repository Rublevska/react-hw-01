import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spasing(2)};
  padding: ${p => p.theme.spasing(3)};
  border-radius: ${p => p.theme.radii.sd};
  background-color: ${p => p.theme.colors.cardColor};
  box-shadow: ${p => p.theme.shadows.small};
`;

export const Status = styled.span`
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${props =>
    props.$isOnline
      ? p => p.theme.colors.greenColor
      : p => p.theme.colors.redColor};
`;
