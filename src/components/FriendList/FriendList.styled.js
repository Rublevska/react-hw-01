import styled from 'styled-components';

export const FriendsListStyle = styled.ul`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spasing(2)};
  margin: 0 auto ${p => p.theme.spasing(20)} auto;
`;
